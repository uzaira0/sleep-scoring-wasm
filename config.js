// Build-time stub for the runtime config script that index.html loads
// (`<script src="config.js">`).
//
// This file MUST exist in every `vite build` output so the tag resolves to a
// real 200 response. Without it the Pages/static build 404s, the SPA fallback
// serves index.html (HTML) in its place, and the browser throws
// "Unexpected token '<'" trying to execute the HTML as a script.
//
// It intentionally leaves `window.__CONFIG__` UNSET so `src/config.ts` falls
// back to `import.meta.env.BASE_URL` (baked from Vite's `base`) — correct for
// dev, the GitHub Pages absolute-base build, and the relative docker build.
//
// Deploy time:
//   - docker: `docker-entrypoint.sh` regenerates config.js per container start
//     with the runtime BASE_PATH (this stub is skipped/replaced). That build has
//     a relative base, so index.html carries no SRI digest for config.js.
//   - GitHub Pages: ships this stub unchanged. The absolute-base build puts its
//     SRI digest on the <script> tag (vite.config.ts sriPlugin), so a deploy
//     step that rewrote it would get the script blocked.
