export {};

declare global {
  interface Window {
    __loaderDone?: boolean;
  }
}
