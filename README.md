# Peiheng Li (Yuki)

[Visit the playground](https://dogeheng.github.io/) · [Profile artwork](https://dogeheng.github.io/profile.html) · [GitHub](https://github.com/dogeheng)

A handwritten hello, an interactive Yuki, and a little paint game. Both pages support English and 中文.

- Touch or hover over Yuki’s eyes, ears, voice, personality, memory, and hands to see how the underlying project works.
- Play a 90-second practice round or challenge a rule-based AI opponent. No account, model API, or multiplayer server is needed.
- Motion preferences, keyboard access, touch controls, and a saved language choice are supported.

The published files at the repository root run directly on GitHub Pages. `profile.html` is the profile artwork; `index.html` is the playground.

## Development

```sh
npm ci
npm run typecheck
npm run build
npm run preview
```

Edit the root HTML/CSS/JS for the pages. The static game adapter lives in `source/game-demo`. Its renderer and simulation are reused from [local-splatoon](https://github.com/dogeheng/local-splatoon), commit `ec142137ac9e0abd2ea58b3b6dc792cc3beac959`; the required MIT-licensed source is included under `source/vendor/local-splatoon`. The character rig is shared with [dsh-omni](https://github.com/dogeheng/dsh-omni).

## Licenses

Site and game code: MIT, © Yuki Li. The reused dsh-omni rig license is preserved in `console-assets/LICENSE`. Third-party libraries retain their own licenses. Font licenses are included in `assets/fonts/OFL.txt` (Allura) and `assets/fonts/ZhiMangXing-OFL.txt` (Zhi Mang Xing).
