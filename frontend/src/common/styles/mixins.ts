import { BREAKPOINTS } from "@src/common/styles/const";
import { css, CSSObject, SimpleInterpolation } from "styled-components";

export const media = {
  up:
    (breakpoint: keyof typeof BREAKPOINTS) =>
    (
      first: TemplateStringsArray | CSSObject,
      ...interpolations: SimpleInterpolation[]
    ) => {
      if (BREAKPOINTS[breakpoint].min) {
        return css`
          @media (min-width: ${BREAKPOINTS[breakpoint].min}px) {
            ${css(first, ...interpolations)}
          }
        `;
      }

      return css`
        ${css(first, ...interpolations)}
      `;
    },
  down:
    (breakpoint: keyof typeof BREAKPOINTS) =>
    (
      first: TemplateStringsArray | CSSObject,
      ...interpolations: SimpleInterpolation[]
    ) => {
      if (BREAKPOINTS[breakpoint].max) {
        return css`
          @media (max-width: ${BREAKPOINTS[breakpoint].max}px) {
            ${css(first, ...interpolations)}
          }
        `;
      }

      return css`
        ${css(first, ...interpolations)}
      `;
    },
  only:
    (breakpoint: keyof typeof BREAKPOINTS) =>
    (
      first: TemplateStringsArray | CSSObject,
      ...interpolations: SimpleInterpolation[]
    ) => {
      const minWidthQuery = BREAKPOINTS[breakpoint].min
        ? `(min-width: ${BREAKPOINTS[breakpoint].min}px)`
        : undefined;

      const maxWidthQuery = BREAKPOINTS[breakpoint].max
        ? `(max-width: ${BREAKPOINTS[breakpoint].max}px)`
        : undefined;

      const mediaQuery = [minWidthQuery, maxWidthQuery]
        .filter(Boolean)
        .join(" and ");

      if (mediaQuery) {
        return css`
          @media ${mediaQuery} {
            ${css(first, ...interpolations)}
          }
        `;
      }

      return css`
        ${css(first, ...interpolations)}
      `;
    },
  between:
    (
      fromBreakpoint: keyof typeof BREAKPOINTS,
      toBreakpoint: keyof typeof BREAKPOINTS,
    ) =>
    (
      first: TemplateStringsArray | CSSObject,
      ...interpolations: SimpleInterpolation[]
    ) => {
      const minWidthQuery = BREAKPOINTS[fromBreakpoint].min
        ? `(min-width: ${BREAKPOINTS[fromBreakpoint].min}px)`
        : undefined;

      const maxWidthQuery = BREAKPOINTS[toBreakpoint].max
        ? `(max-width: ${BREAKPOINTS[toBreakpoint].max}px)`
        : undefined;

      const mediaQuery = [minWidthQuery, maxWidthQuery]
        .filter(Boolean)
        .join(" and ");

      if (mediaQuery) {
        return css`
          @media ${mediaQuery} {
            ${css(first, ...interpolations)}
          }
        `;
      }

      return css`
        ${css(first, ...interpolations)}
      `;
    },
};
