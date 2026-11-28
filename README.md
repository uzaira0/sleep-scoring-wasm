# Sleep Scoring

A desktop-browser, local-first actigraphy sleep-scoring PWA.
[Open Sleep Scoring](https://uzaira0.github.io/sleep-scoring-wasm/).
Recordings, diaries and scores are processed and stored on your device.

## Launch and install

1. Open the link in a current desktop Chrome, Edge, Firefox or Safari with site storage enabled.
2. Create a local workspace, choose a scorer name, and enter the workspace.
3. Optional: use Chrome or Edge's **Install app** command in the address bar or browser menu.
   In Safari, use **File → Add to Dock** where supported. Firefox users can bookmark the site.
4. Keep the first visit online until the app finishes loading. Later visits can use its cached shell offline.
   The optional demo download needs a connection once. Browser storage is not a backup: export your work.

## First use with the built-in synthetic demo

1. In a new workspace choose **Load demo recording**.
2. Read and tick the download acknowledgement, then choose **Download demo**.
   The bundled synthetic four-day recording and matching diary are imported and scored locally.
3. Open the **Sleep** view, select the demo file and a night, and inspect the activity trace and proposed sleep markers.
4. Adjust the proposed markers and save. In **Export**, select the demo file and download a results bundle.
   Inspect that synthetic export before importing your own recordings.

The engine uses WebAssembly threads when the browser and service worker provide cross-origin isolation,
with a single-thread fallback. Launch the app directly; embedded frames are refused.
A fresh visit starts without GitHub Pages response headers; the service worker supplies the security
and isolation headers on subsequent controlled responses.

## Maintenance and support

This is a solo-maintainer project maintained by [uzaira0](https://github.com/uzaira0).
There is no guaranteed response time or release schedule. The same maintainer reviews issues and
watches for regressions after each release.

Releases are made by the operator's gated `scripts/ship-pages.sh` in the separate private source
repository, after an explicit deployment request and local validation. Releases are not automatic CI deployments.
This public repository holds deployment artifacts and these community documents. Source lives in a
separate private repository; outside source contributions and pull requests are not accepted.

Ask questions and report bugs in [this repository's Issues](https://github.com/uzaira0/sleep-scoring-wasm/issues).
Include your browser version, build/bundle ID and steps using the built-in synthetic demo.
Never attach participant recordings, diaries, identifiers, screenshots containing participant data, or exports.
For security vulnerabilities use the private route in [SECURITY.md](SECURITY.md), never a public issue.
