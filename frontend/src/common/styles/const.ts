interface Breakpoint {
  min?: number;
  max?: number;
}

type Breakpoints = {
  [key in
    | "MOBILE"
    | "TABLET"
    | "LAPTOP"
    | "LAPTOP_LARGE"
    | "LAPTOP_EXTRA_LARGE"]: Breakpoint;
};

export const BREAKPOINTS: Breakpoints = {
  MOBILE: {
    min: 480,
    max: 767.98,
  },
  TABLET: {
    min: 768,
    max: 1024.98,
  },
  LAPTOP: {
    min: 1025,
    max: 1439.98,
  },
  LAPTOP_LARGE: {
    min: 1440,
    max: 1699.98,
  },
  LAPTOP_EXTRA_LARGE: {
    min: 1700,
  },
} as const;
