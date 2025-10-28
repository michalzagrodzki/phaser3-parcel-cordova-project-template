# Coding Agent Guide

## Project Snapshot
- Phaser 3 platformer template bundled with Parcel 2 and wrapped for Cordova (browser + iOS platforms preconfigured).
- Runtime entry is `src/index.js`; Phaser scene logic starts in `src/game.js`.
- Production builds place compiled assets in `www/` via `scripts/beforeBuild.js`, which also injects the `cordova.js` script tag.

## Repository Layout
- `src/index.html` – Cordova-hosted shell, loads CSS and Parcel entry module.
- `src/index.js` – Phaser game bootstrap; waits for `deviceready` on devices.
- `src/game.js` – Main Phaser scene with physics, collectibles, and input handling.
- `src/assets/` – Image assets imported directly into the bundle.
- `src/css/index.css` – Cordova starter styles and safe-area handling.
- `scripts/beforeBuild.js` – Parcel v1 bundler script used by `npm run build` to emit `www/`.
- `config.xml` – Cordova application manifest and platform preferences.
- `package.json` – npm scripts, Cordova platform definitions, dependencies.

## Setup & Common Commands
1. `npm install`
2. `npm run dev` – Parcel dev server at `http://127.0.0.1:2000` with hot reload.
3. `npm run build` – Clean + bundle to `www/`; required before Cordova runs.
4. `cordova run browser -- --live-reload` – Serve compiled app through Cordova (uses `www/`).
5. `cordova emulate ios` – iOS simulator run (requires Xcode tooling on macOS).

Parcel v2 handles the dev server (`npm run dev`); the custom build script still relies on Parcel v1 API. Do **not** delete `parcel-bundler` until build script is migrated.

## Workflow Expectations for Coding Agents
- Keep source edits inside `src/`, configuration in `config.xml` or `package.json`; never modify generated `www/` output by hand.
- Import images/audio via ES modules so Parcel can fingerprint and copy them.
- Follow existing code style: tabs within `class GameScene`, double quotes in imports, camelCase identifiers.
- Document non-obvious logic with short comments; avoid verbose annotations.
- When adding scenes, export them and register inside the `scene` array in `src/index.js`.
- Run `npm run build` before validating Cordova commands; ensure the build finishes cleanly.

## Phaser 3 Best Practices
- Use `preload/create/update` lifecycle methods; keep heavy logic out of `update` loops when possible.
- Group related game objects with `physics.add.group` / `this.add.group` for batch configuration.
- Use `this.anims.exists()` checks before creating duplicate animations when adding multiple scenes.
- Prefer constants/config objects for magic numbers (velocities, spawn positions) to ease tuning.
- Clean up timers and event listeners in `shutdown`/`destroy` hooks when creating new scenes.

## Parcel Guidance
- Rely on static `import` statements so Parcel can tree-shake and include assets.
- Environment conditionals use `process.env.NODE_ENV`; guard Cordova-only logic accordingly.
- If you add new entry files, update `scripts/beforeBuild.js` and `package.json` scripts consistently.
- Parcel caches aggressively in dev; if something seems stale, restart `npm run dev` or clear `.parcel-cache/`.

## Cordova Considerations
- `cordova.js` is injected post-build; do not add it manually to `src/index.html`.
- Keep `config.xml` in sync with plugin usage; add `<plugin>` entries when new Cordova plugins are required.
- Respect `deviceready` event before calling Cordova APIs or plugins.
- Avoid blocking the main thread on startup; Phaser boot should stay responsive for splash handling.

## Quality & Verification Checklist
- Launch `npm run dev` and confirm assets load and the Phaser canvas scales correctly.
- Run `npm run build` and inspect `www/index.html` for the injected `cordova.js` tag.
- For Cordova flows, execute `cordova run browser` (or platform-specific equivalents) after a fresh build.
- Linting is manual; consider adding ESLint/Prettier if the project adopts them.
- Keep dependencies aligned with Cordova and Phaser compatibility; test on target devices when possible.

## Useful References
- Phaser 3 docs: https://newdocs.phaser.io/docs/3.55.2
- Parcel 2 docs: https://parceljs.org/
- Cordova CLI guides: https://cordova.apache.org/docs/en/11.x/
