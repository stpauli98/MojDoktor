declare global {
  interface Window {
    locomotiveScroll?: {
      scrollTo: (target: string | HTMLElement) => void
      update: () => void
      destroy: () => void
    }
  }
}