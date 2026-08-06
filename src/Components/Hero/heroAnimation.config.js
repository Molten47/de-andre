// Central config for the Hero Earth animation. Tune values here only.

// Base (desktop) keyframes for the Earth. The loop visits these in order and
// wraps back to index 0, so index 0 doubles as both the start and end state
// (keeps the infinite repeat seamless — no snap on loop restart).
export const earthPositions = [
  { x: 0, y: 260, scale: 0.9, rotation: -15, flip: false },   // 0: bottom-center (Main content)
  { x: 420, y: -60, scale: 1.6, rotation: 0, flip: false },  // 1: right, large (AR content, text left)
  { x: 0, y: 260, scale: 0.9, rotation: 10, flip: false },    // 2: bottom-center (Main content)
  { x: -420, y: -60, scale: 1.6, rotation: 0, flip: false },   // 3: left, large, mirrored (AR content, text right)
]

// Multiplies earthPositions per breakpoint so travel distance/size scale
// down on smaller screens without editing the base keyframes above.
export const responsiveScale = {
  desktop: { distance: 1, size: 1 },
  tablet: { distance: 0.55, size: 0.85 },
  mobile: { distance: 0.32, size: 0.68 },
}

export const mediaQueries = {
  desktop: '(min-width: 1024px)',
  tablet: '(min-width: 640px) and (max-width: 1023px)',
  mobile: '(max-width: 639px)',
}

// Each leg (position[i] -> position[i+1]) gets an equal share of this.
export const loopDurationSeconds = 30
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
  cta: { label: 'Explore', href: 'https://www.behance.net/DeAndre', variant: 'filled' },
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

export const heroContent = [mainContent, arContentLeft, mainContent, arContentRight]

export const contentFadeDurationSeconds = 0.5
