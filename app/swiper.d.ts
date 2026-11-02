// Swiper 8's package exports don't expose its type declarations, so declare the parts used here.
declare module "swiper" {
  export default class Swiper {
    constructor(container: HTMLElement, options?: Record<string, unknown>);
    destroy(deleteInstance?: boolean, cleanStyles?: boolean): void;
  }
}
