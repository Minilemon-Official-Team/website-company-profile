/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "@splidejs/react-splide" {
  import { ComponentType } from "react";

  export interface SplideProps {
    options?: object;

    [key: string]: any;
  }

  export const Splide: ComponentType<SplideProps>;

  export const SplideSlide: ComponentType<any>;
}
