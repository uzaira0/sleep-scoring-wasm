(function () {
  "use strict";

  var dumpCache = null;
  var importPayload = null;

  var originEl = document.getElementById("origin");
  var logEl = document.getElementById("log");
  var scanButton = document.getElementById("scan");
  var exportButton = document.getElementById("export");
  var importButton = document.getElementById("import");
  var importFile = document.getElementById("importFile");

  originEl.textContent = window.location.origin;

  function log(message) {
    var line = "[" + new Date().toISOString() + "] " + message;
    logEl.textContent += line + "\n";
    logEl.scrollTop = logEl.scrollHeight;
  }

  function request(req) {
    return new Promise(function (resolve, reject) {
      req.onsuccess = function () { resolve(req.result); };
      req.onerror = function () { reject(req.error || new Error("IndexedDB request failed")); };
    });
  }

  function openDb(name, version, onUpgrade) {
    return new Promise(function (resolve, reject) {
      var req = version ? indexedDB.open(name, version) : indexedDB.open(name);
      req.onupgradeneeded = function (event) {
        if (onUpgrade) onUpgrade(req.result, event);
      };
      req.onsuccess = function () { resolve(req.result); };
      req.onerror = function () { reject(req.error || new Error("IndexedDB open failed")); };
      req.onblocked = function () {
        reject(new Error("Open blocked. Close other tabs using " + name + " and retry."));
      };
    });
  }

  function deleteDb(name) {
    return new Promise(function (resolve, reject) {
      var req = indexedDB.deleteDatabase(name);
      req.onsuccess = function () { resolve(); };
      req.onerror = function () { reject(req.error || new Error("IndexedDB delete failed")); };
      req.onblocked = function () {
        reject(new Error("Delete blocked. Close other tabs using " + name + " and retry."));
      };
    });
  }

  function txDone(tx) {
    return new Promise(function (resolve, reject) {
      tx.oncomplete = function () { resolve(); };
      tx.onerror = function () { reject(tx.error || new Error("IndexedDB transaction failed")); };
      tx.onabort = function () { reject(tx.error || new Error("IndexedDB transaction aborted")); };
    });
  }

  function arrayBufferToBase64(buffer) {
    var bytes = new Uint8Array(buffer);
    var chunk = 0x8000;
    var s = "";
    for (var i = 0; i < bytes.length; i += chunk) {
      s += String.fromCharCode.apply(null, bytes.subarray(i, Math.min(i + chunk, bytes.length)));
    }
    return btoa(s);
  }

  function base64ToArrayBuffer(base64) {
    var bin = atob(base64);
    var bytes = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i += 1) bytes[i] = bin.charCodeAt(i);
    return bytes.buffer;
  }

  function encodeValue(value) {
    if (value instanceof ArrayBuffer) {
      return { __sleepRecoveryType: "ArrayBuffer", base64: arrayBufferToBase64(value) };
    }
    if (ArrayBuffer.isView(value)) {
      return {
        __sleepRecoveryType: value.constructor.name,
        base64: arrayBufferToBase64(value.buffer.slice(value.byteOffset, value.byteOffset + value.byteLength)),
      };
    }
    if (value instanceof Date) {
      return { __sleepRecoveryType: "Date", value: value.toISOString() };
    }
    if (Array.isArray(value)) return value.map(encodeValue);
    if (value && typeof value === "object") {
      var out = {};
      Object.keys(value).forEach(function (key) {
        out[key] = encodeValue(value[key]);
      });
      return out;
    }
    return value;
  }

  function decodeValue(value) {
    if (Array.isArray(value)) return value.map(decodeValue);
    if (value && typeof value === "object") {
      if (value.__sleepRecoveryType === "ArrayBuffer") return base64ToArrayBuffer(value.base64);
      if (value.__sleepRecoveryType === "Date") return new Date(value.value);
      if (value.__sleepRecoveryType && value.base64) {
        var buffer = base64ToArrayBuffer(value.base64);
        var ctor = window[value.__sleepRecoveryType];
        if (typeof ctor === "function") return new ctor(buffer);
        return buffer;
      }
      var out = {};
      Object.keys(value).forEach(function (key) {
        out[key] = decodeValue(value[key]);
      });
      return out;
    }
    return value;
  }

  async function listCandidateDatabases() {
    if (indexedDB.databases) {
      var dbs = await indexedDB.databases();
      return dbs
        .filter(function (db) { return db.name && /^SleepScoring/.test(db.name); })
        .map(function (db) { return { name: db.name, version: db.version || undefined }; });
    }
    return [
      { name: "SleepScoringGlobal-wasm" },
      { name: "SleepScoringGlobal" },
      { name: "SleepScoringDB" },
    ];
  }

  async function dumpDatabase(info) {
    var db = await openDb(info.name);
    try {
      var storeNames = Array.prototype.slice.call(db.objectStoreNames);
      var schema = [];
      var stores = {};

      if (storeNames.length > 0) {
        var schemaTx = db.transaction(storeNames, "readonly");
        storeNames.forEach(function (storeName) {
          var store = schemaTx.objectStore(storeName);
          schema.push({
            name: store.name,
            keyPath: store.keyPath,
            autoIncrement: store.autoIncrement,
            indexes: Array.prototype.slice.call(store.indexNames).map(function (indexName) {
              var index = store.index(indexName);
              return {
                name: index.name,
                keyPath: index.keyPath,
                unique: index.unique,
                multiEntry: index.multiEntry,
              };
            }),
          });
        });
        await txDone(schemaTx);

        var dataTx = db.transaction(storeNames, "readonly");
        await Promise.all(storeNames.map(async function (storeName) {
          var rows = await request(dataTx.objectStore(storeName).getAll());
          stores[storeName] = rows.map(encodeValue);
        }));
        await txDone(dataTx);
      }

      return {
        name: db.name,
        version: db.version,
        schema: schema,
        stores: stores,
      };
    } finally {
      db.close();
    }
  }

  async function dumpStorage() {
    function copyStorage(storage) {
      var out = {};
      try {
        for (var i = 0; i < storage.length; i += 1) {
          var key = storage.key(i);
          if (key && /^sleep-scoring/.test(key)) out[key] = storage.getItem(key);
        }
      } catch (err) {
        out.__error = err instanceof Error ? err.message : String(err);
      }
      return out;
    }
    return {
      localStorage: copyStorage(window.localStorage),
      sessionStorage: copyStorage(window.sessionStorage),
    };
  }

  async function scan() {
    exportButton.disabled = true;
    dumpCache = null;
    log("Scanning " + window.location.origin);
    var candidates = await listCandidateDatabases();
    log("Candidate databases: " + (candidates.map(function (d) { return d.name; }).join(", ") || "(none)"));

    var databases = [];
    for (var i = 0; i < candidates.length; i += 1) {
      try {
        var dump = await dumpDatabase(candidates[i]);
        var counts = Object.keys(dump.stores).map(function (name) {
          return name + "=" + dump.stores[name].length;
        }).join(", ");
        log(dump.name + " v" + dump.version + ": " + counts);
        databases.push(dump);
      } catch (err) {
        log("Skipping " + candidates[i].name + ": " + (err instanceof Error ? err.message : String(err)));
      }
    }

    dumpCache = {
      kind: "sleep-scoring-indexeddb-recovery",
      formatVersion: 1,
      createdAt: new Date().toISOString(),
      origin: window.location.origin,
      databases: databases,
      storage: await dumpStorage(),
    };
    exportButton.disabled = databases.length === 0;
    log("Scan complete. Databases captured: " + databases.length);
  }

  function downloadDump() {
    if (!dumpCache) return;
    var json = JSON.stringify(dumpCache);
    var blob = new Blob([json], { type: "application/json" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "sleep-scoring-idb-recovery-" + new Date().toISOString().replace(/[:.]/g, "-") + ".json";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(a.href);
    log("Recovery JSON downloaded.");
  }

  async function restoreDatabase(dbDump) {
    await deleteDb(dbDump.name);
    var db = await openDb(dbDump.name, dbDump.version || 1, function (upgradeDb) {
      dbDump.schema.forEach(function (storeSchema) {
        var store = upgradeDb.createObjectStore(storeSchema.name, {
          keyPath: storeSchema.keyPath,
          autoIncrement: !!storeSchema.autoIncrement,
        });
        storeSchema.indexes.forEach(function (indexSchema) {
          store.createIndex(indexSchema.name, indexSchema.keyPath, {
            unique: !!indexSchema.unique,
            multiEntry: !!indexSchema.multiEntry,
          });
        });
      });
    });
    try {
      var storeNames = Object.keys(dbDump.stores);
      if (storeNames.length === 0) return;
      var tx = db.transaction(storeNames, "readwrite");
      storeNames.forEach(function (storeName) {
        var store = tx.objectStore(storeName);
        dbDump.stores[storeName].forEach(function (encodedRow) {
          store.put(decodeValue(encodedRow));
        });
      });
      await txDone(tx);
    } finally {
      db.close();
    }
  }

  async function importDump() {
    if (!importPayload) return;
    if (importPayload.kind !== "sleep-scoring-indexeddb-recovery") {
      throw new Error("This is not a Sleep Scoring recovery JSON file.");
    }
    var ok = window.confirm(
      "This will delete and recreate matching SleepScoring IndexedDB databases in " +
      window.location.origin +
      ". Continue?"
    );
    if (!ok) return;

    log("Importing recovery JSON from " + importPayload.origin + " into " + window.location.origin);
    for (var i = 0; i < importPayload.databases.length; i += 1) {
      var dbDump = importPayload.databases[i];
      log("Restoring " + dbDump.name);
      await restoreDatabase(dbDump);
    }

    ["localStorage", "sessionStorage"].forEach(function (kind) {
      var data = importPayload.storage && importPayload.storage[kind];
      if (!data) return;
      Object.keys(data).forEach(function (key) {
        if (key !== "__error" && /^sleep-scoring/.test(key)) {
          window[kind].setItem(key, data[key]);
        }
      });
    });

    log("Import complete. Reload the app page for this origin.");
  }

  scanButton.addEventListener("click", function () {
    scan().catch(function (err) { log("Scan failed: " + (err instanceof Error ? err.message : String(err))); });
  });
  exportButton.addEventListener("click", downloadDump);
  importFile.addEventListener("change", function () {
    importPayload = null;
    importButton.disabled = true;
    var file = importFile.files && importFile.files[0];
    if (!file) return;
    file.text().then(function (text) {
      importPayload = JSON.parse(text);
      importButton.disabled = false;
      log("Loaded recovery JSON from " + (importPayload.origin || "unknown origin"));
    }).catch(function (err) {
      log("Failed to read recovery JSON: " + (err instanceof Error ? err.message : String(err)));
    });
  });
  importButton.addEventListener("click", function () {
    importDump().catch(function (err) { log("Import failed: " + (err instanceof Error ? err.message : String(err))); });
  });

  log("Ready.");
}());
