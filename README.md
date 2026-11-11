# Vestige website

A static, dependency-free landing page and support site for Vestige. The hero background is decorative artwork; the two phone screens are real captures from the 655-place preview app at source commit `06764354`. The column-and-laurel mark comes from the app asset.

## Local preview

Run `python3 -m http.server 8765` in this directory and open `http://localhost:8765/`. No build step is needed.

## Deployment

Push to `main`. `.github/workflows/pages.yml` publishes this directory through GitHub Pages at <https://jhackworth42.github.io/vestige-website/>. The project-path-relative links work at that URL. HTTPS is provided by GitHub Pages.

## App Store link

Update `appStoreUrl` once in `site.js` with the official `https://apps.apple.com/...` listing URL. Until then, every CTA displays a non-clickable Coming Soon state. Do not guess the listing URL. An official Apple badge can replace the text CTA once a public listing exists.

## Support email

Update `supportEmail` once in `site.js`. The current inbox is `jop.hackworth@gmail.com`. The page source also prints that address as a no-JavaScript fallback; update those text fallbacks when changing the address.

## Privacy policy

Edit `privacy.html` when the app or its data practices change. The policy was checked against the current app dependencies, map implementation, and privacy manifest on November 10, 2026. Before using this URL in App Store Connect, the developer must verify the live App Privacy answers match the map library's precise-location declaration and confirm that the support email retention statement reflects actual practice. The current production/TestFlight build still points to the older legal-site URL; changing that requires a new app build.

## Images

`assets/roman-sunset.webp` is decorative AI-generated scenery. `assets/map-screen.webp` and `assets/colosseum-screen.webp` are actual simulator captures, cropped to remove Expo Go chrome but otherwise unaltered. Replace them with screenshots from the approved production build before App Store submission if its UI or catalog changes. `assets/vestige-emblem.png`, the icons, and the social card are local brand assets. Keep screenshot aspect ratios unchanged.
