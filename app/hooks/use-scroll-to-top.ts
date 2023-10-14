import {useState, useEffect, useCallback} from 'react'

export function useScrollToTop(visibilityThreshold = 500) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function scrollListener() {
      if (!visible && window.scrollY > visibilityThreshold) {
        setVisible(true)
      } else if (visible && window.scrollY <= visibilityThreshold) {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [visibilityThreshold, visible])

  const scrollToTop = useCallback(() => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }, [])

  return {
    visible,
    scrollToTop,
  }
}
