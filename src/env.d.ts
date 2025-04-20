/// <reference path="../.astro/types.d.ts" />
/// <reference types="vite-plugin-svgr/client" />

declare module '*.svg' {
    import { FC, SVGProps } from 'react';
    const content: FC<SVGProps<SVGElement>>;
    export default content;
  }