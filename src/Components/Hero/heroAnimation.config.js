// Central config for the Hero Earth animation. Tune values here only.

// Base (desktop) keyframes for the Earth. The loop visits these in order and
// wraps back to index 0, so index 0 doubles as both the start and end state
// scale = Earth diameter as a fraction of viewport width (with earthBaseWidthVw = 100).
export const earthBaseWidthVw = 135   // image box = 135vw so the globe itself comes out ~100vw
export const earthDiscRatio = 0.74    // globe diameter ÷ image width (the JPG's black margin)

export const earthPositions = [
  { x: 0,     topVh: 0.52, scale: 0.73, rotation: 0, flip: false }, // large centered, top edge at 52% of height
  { x: -0.44, y: 0.10,     scale: 0.75, rotation: 0, flip: false }, // left
  { x: 0.28,  y: 0.16,     scale: 0.74, rotation: 0, flip: false }, // right
]

export const spinSeconds = 36         // one full turn; lower = faster
export const initialHoldSeconds = 6   // time spent spinning at center before the first move


// Multiplies earthPositions per breakpoint so travel distance/size scale
// down on smaller screens without editing the base keyframes above.
export const responsiveScale = {
  desktop: { distance: 1, size: 1 },
  tablet: { distance: 0.55, size: 0.85 },
  mobile: { distance: 0.4, size: 1.45 },
}


export const mediaQueries = {
  desktop: '(min-width: 1024px)',
  tablet: '(min-width: 640px) and (max-width: 1023px)',
  mobile: '(max-width: 639px)',
}


export const legSeconds = 2.5       // travel time per move
export const holdSeconds = 4        // pause at each keyframe
export const contentSwapAt = 0.3    // 0–1: how far into the move the text swaps
export const loopEase = 'power3.inOut'

export const floatAnimation = {
  distance: 8, // px, up/down
  duration: 2.4,
  ease: 'sine.inOut',
}

// Content shown alongside each Earth keyframe (same index as earthPositions).
// Indexes 0 and 2 intentionally reuse `mainContent` — the Earth returns to
// center between each left/right swing, so the main content reappears too.
const mainContent = {
  id: 'main',
  align: 'center',
  title: 'Designed By DeAndre',
  subtitle: 'Where Creativity Runs Wild and Aesthetics Rule.',
  cta: { label: 'Explore', href: 'https://www.behance.net/DeAndre', variant: 'outline' },
}

const arContentLeft = {
  id: 'ar-left',
  align: 'left',
  subtitle: 'With Augmented Reality, we will give life to your imagination',
  cta: { label: 'View Projects', href: 'https://www.behance.net/DeAndre', variant: 'outline' },
}

const arContentRight = {
  id: 'ar-right',
  align: 'right',
  subtitle: 'With Augmented Reality, we will give life to your imagination',
  cta: { label: 'View Projects', href: 'https://www.behance.net/DeAndre', variant: 'outline' },
}

export const heroContent = [mainContent, arContentRight, arContentLeft]

export const contentFadeDurationSeconds = 0.5
