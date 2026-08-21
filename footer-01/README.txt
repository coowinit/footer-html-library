EVODEK Footer 01 package

Structure:
- index.html
- css/footer.css
- js/footer.js
- images/icon-facebook.svg
- images/icon-instagram.svg
- images/icon-linkedin.svg
- images/icon-youtube.svg
- images/evodek-logo.svg

Notes:
1. The four SVG icons were normalized to a shared 24x24 viewBox and reusable currentColor markup.
2. The footer uses CSS masks for social icons, so all icons inherit one muted color and brighten on hover/focus without editing the SVG files again.
3. On screens <= 720px, the four footer navigation groups are collapsed by default.
4. Replace social href="#" placeholders with official EVODEK social profile URLs.
5. The EVODEK logo SVG was optimized for web use: a responsive viewBox was added, the unused Vecta namespace and clipPath wrapper were removed, and the artwork paths were preserved.
6. The logo is rendered as an external <img> for browser caching, accessibility and easier maintenance.
7. This GitHub Pages preview copy displays the footer immediately; replace demo URLs before production use.
