// Pre-paint theme stamp. ThemeProvider writes `data-eq-theme` to <html> from a
// React effect, which runs after the first paint — so a dark-mode user saw the
// light token set (white page) between the PWA splash and the first effect on
// every cold start. This runs synchronously in <head>, before any stylesheet
// applies, and reads the same key ThemeProvider reads ("sleep-scoring-theme":
// "light" | "dark" | "system"; absent = system). CSP is `script-src 'self'`,
// so it is a file, not an inline script. ThemeProvider re-stamps afterwards and
// always wins.
(function () {
  try {
    var stored = localStorage.getItem("sleep-scoring-theme");
    var dark = stored === "dark"
      || ((stored === null || stored === "system")
        && window.matchMedia("(prefers-color-scheme: dark)").matches);
    var resolved = dark ? "dark" : "light";
    var root = document.documentElement;
    root.setAttribute("data-eq-theme", resolved);
    root.classList.add(resolved);
  } catch (_error) {
    // Storage blocked (private mode): fall through to the light default.
  }
})();
