export type ScreenBreakpoint = 'sm' | 'md' | 'lg';

const SCREEN_BREAKPOINT = {
  sm: 375,
  md: 1023,
  lg: 1024,
} as const;

export default SCREEN_BREAKPOINT;
