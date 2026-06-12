(function () {
  try {
    var startedAt = localStorage.getItem("sleep-scoring:import-in-progress");
    if (!startedAt) return;

    // Log once; the dispatch below repeats until React mounts a listener.
    console.warn(
      "[backup] A workspace import started " +
        startedAt +
        " did not finish. Some files, markers, or diary entries may be missing. Re-run the import or visit Data Settings to clear the warning.",
    );

    var notify = function () {
      window.dispatchEvent(
        new CustomEvent("backup:partial-import", {
          detail: { startedAt: startedAt },
        }),
      );
    };

    notify();
    window.setTimeout(notify, 100);
    var timer = window.setInterval(notify, 100);
    window.setTimeout(function () {
      window.clearInterval(timer);
    }, 6000);
  } catch (_) {
    // React repeats this check after startup; keep the HTML boot path resilient.
  }
})();
