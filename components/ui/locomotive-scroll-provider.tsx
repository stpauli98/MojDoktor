"use client"

import { useEffect, useRef } from 'react'

interface LocomotiveScrollInstance {
  scrollTo: (target: string | HTMLElement) => void
  update: () => void
  destroy: () => void
}

interface LocomotiveScrollProviderProps {
  children: React.ReactNode
}

export function LocomotiveScrollProvider({ children }: LocomotiveScrollProviderProps) {
  const scrollRef = useRef<LocomotiveScrollInstance | null>(null)

  useEffect(() => {
    let locomotiveScroll: LocomotiveScrollInstance | null = null

    const initLocomotiveScroll = async () => {
      try {
        // Dynamic import to avoid SSR issues
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        
        locomotiveScroll = new LocomotiveScroll({
          el: document.querySelector('[data-scroll-container]') as HTMLElement,
          smooth: true,
          multiplier: 1,
          class: 'is-revealed',
          scrollbarClass: 'c-scrollbar',
          scrollingClass: 'has-scroll-scrolling',
          draggingClass: 'has-scroll-dragging',
          smoothClass: 'has-scroll-smooth',
          initClass: 'has-scroll-init',
        })

        // Update locomotive scroll on window resize
        const handleResize = () => {
          locomotiveScroll?.update()
        }

        window.addEventListener('resize', handleResize)

        // Store instance globally and locally
        scrollRef.current = locomotiveScroll
        window.locomotiveScroll = locomotiveScroll

        return () => {
          window.removeEventListener('resize', handleResize)
          locomotiveScroll?.destroy()
        }
      } catch (error) {
        console.warn('Locomotive Scroll initialization failed:', error)
      }
    }

    // Initialize after DOM is ready
    const timer = setTimeout(initLocomotiveScroll, 100)

    return () => {
      clearTimeout(timer)
      if (scrollRef.current) {
        scrollRef.current.destroy()
      }
    }
  }, [])



  return (
    <div data-scroll-container>
      {children}
    </div>
  )
}

// Export scroll utilities
export const useLocomotiveScroll = () => {
  const scrollTo = (target: string | HTMLElement) => {
    if (window.locomotiveScroll) {
      window.locomotiveScroll.scrollTo(target)
    }
  }

  return { scrollTo }
}