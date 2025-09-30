"use client"

import { useEffect, useRef, useState } from 'react'

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
  const [isLoaded, setIsLoaded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let locomotiveScroll: LocomotiveScrollInstance | null = null
    let mounted = true

    const initLocomotiveScroll = async () => {
      // Wait for container to be available
      if (!containerRef.current || !mounted) return

      try {
        // Preload check - avoid re-initialization
        if (scrollRef.current) return

        // Dynamic import with better error handling
        const LocomotiveScroll = (await import('locomotive-scroll')).default

        // Double-check mount status
        if (!mounted || !containerRef.current) return

        locomotiveScroll = new LocomotiveScroll({
          el: containerRef.current,
          smooth: true,
          multiplier: 1,

          class: 'is-revealed',
          scrollbarClass: 'c-scrollbar',
          scrollingClass: 'has-scroll-scrolling',
          draggingClass: 'has-scroll-dragging',
          smoothClass: 'has-scroll-smooth',
          initClass: 'has-scroll-init',
        })

        // Optimized resize handler with debounce
        let resizeTimeout: NodeJS.Timeout
        const handleResize = () => {
          clearTimeout(resizeTimeout)
          resizeTimeout = setTimeout(() => {
            if (mounted && locomotiveScroll) {
              locomotiveScroll.update()
            }
          }, 150)
        }

        window.addEventListener('resize', handleResize, { passive: true })

        // Store instance globally and locally
        scrollRef.current = locomotiveScroll
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ;(window as any).locomotiveScroll = locomotiveScroll

        // Mark as loaded to remove loading state
        if (mounted) {
          setIsLoaded(true)
        }

        return () => {
          clearTimeout(resizeTimeout)
          window.removeEventListener('resize', handleResize)
          locomotiveScroll?.destroy()
        }
      } catch (error) {
        console.warn('Locomotive Scroll initialization failed:', error)
        // Graceful fallback to regular scroll with enhanced UX
        if (mounted && containerRef.current) {
          // Remove smooth scroll classes
          document.documentElement.classList.remove('has-scroll-smooth')
          document.body.classList.remove('has-scroll-smooth')
          
          // Enable regular scroll with custom scrollbar
          containerRef.current.style.overflow = 'auto'
          containerRef.current.style.height = 'auto'
          
          setIsLoaded(true)
        }
      }
    }

    // Use requestAnimationFrame for smoother initialization
    const initWithRAF = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(initLocomotiveScroll)
      })
    }

    // Initialize when DOM is ready
    if (document.readyState === 'complete') {
      initWithRAF()
    } else {
      window.addEventListener('load', initWithRAF, { once: true })
    }

    return () => {
      mounted = false
      if (scrollRef.current) {
        scrollRef.current.destroy()
        scrollRef.current = null
      }
    }
  }, [])



  return (
    <div
      ref={containerRef}
      data-scroll-container
      className={`min-h-screen ${
        !isLoaded ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'
      }`}
    >
      {children}
    </div>
  )
}

// Export scroll utilities
export const useLocomotiveScroll = () => {
  const scrollTo = (target: string | HTMLElement) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((window as any).locomotiveScroll) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ;(window as any).locomotiveScroll.scrollTo(target)
    }
  }

  return { scrollTo }
}