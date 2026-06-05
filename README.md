# sleep-scoring-wasm

Offline-first **WASM PWA** for visual sleep scoring of accelerometer data — runs
**entirely in your browser**. No backend, no account, no upload: recordings are
parsed, epoched, and scored client-side via Rust/WASM, and everything you do is
stored locally in the browser (IndexedDB).

**Live app:** https://uzaira0.github.io/sleep-scoring-wasm/

## What it does

- Loads ActiGraph / GENEActiv accelerometer CSV recordings locally.
- Computes activity epochs and runs sleep/wake + nonwear algorithms
  (Sadeh 1994, Cole–Kripke 1992, Choi 2011) in a WASM worker, off the main thread.
- Lets you visually place and adjust sleep / nap / nonwear markers on the
  actogram, computes per-period metrics, and exports CSV — all offline.

## Privacy & data

- **Zero outbound:** the build is asserted to reference no third-party origins.
- Your recordings and scoring never leave the device — they live in IndexedDB and
  persist across reloads. Clearing browser storage deletes them.
- Single-threaded WASM (no `SharedArrayBuffer`), so it works on GitHub Pages
  without COOP/COEP headers.

## About this repo

This repository hosts only the **built static artifact**, published to the
`gh-pages` branch by CI. The source lives in a separate monorepo and is compiled
and deployed automatically — this repo is not developed directly.
