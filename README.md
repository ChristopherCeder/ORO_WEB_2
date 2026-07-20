# ORO — 3D Scroll Website

Cinematic scroll-driven 3D site for ORO services. Built as a static SPA — no backend required.

## Services featured

Automotive paint & body, mechanic, roadside assistance, hotshotting, welding & fabrication, landscaping, pressure washing, construction, handyman, drafting & design.

## Stack

- **Vite + React + TypeScript**
- **React Three Fiber + Drei** — 3D scene
- **Lenis + GSAP ScrollTrigger** — smooth scroll choreography
- **Static output** — deploy `dist/` anywhere (Netlify, GitHub Pages, S3, nginx, etc.)

## Development

```bash
npm install
npm run dev
```

Open http://localhost:5173 and scroll to fly through the scene.

## Production build

```bash
npm run build
```

Upload the contents of `dist/` to your static host. The `base: './'` setting in Vite ensures relative asset paths work on any subdirectory.

## Scroll journey

1. **Aerial** — landscaping crew on a large property
2. **Roadside** — breakdown assistance + hotshot rig
3. **Back garage** — mechanical work, paint/body, welding
4. **Front** — construction & fabrication
5. **Inside** — handyman + drafting/design room
6. **Back drive** — flatbed loads up and rolls out (footer)

## Customization

- **Copy & chapters:** `src/data/services.ts`
- **Camera path:** `src/data/cameraPath.ts`
- **Contact info:** `src/data/services.ts` → `contact`
- **3D scene layout:** `src/scene/`

## Notes

The 3D world uses procedural low-poly geometry (no external model files), so the entire site ships as a single static bundle with no cloud dependencies.
