import {useState, useEffect, type ReactElement} from 'react'
import {useWindowScroll} from '@react-hook/window-scroll'

interface ScrollConfig {
  percent: number
  delay?: number
}
interface ScrollTriggerTriggerProps {
  config: ScrollConfig
  children: ReactElement
}

export function ScrollTrigger({children, config}: ScrollTriggerTriggerProps) {
  const [shouldShowAsset, setShowAsset] = useState(false)
  const [triggerAsset, setTriggerAsset] = useState(false)

  const position = useWindowScroll(30)
  const {percent: scrollPercent = 0.4, delay = 0} = config

  useEffect(() => {
    if (triggerAsset) {
      const id = setTimeout(() => setShowAsset(true), delay * 1000)
      return () => clearTimeout(id)
    }
  }, [triggerAsset, delay])

  useEffect(() => {
    const body = document.body
    const html = document.documentElement
    const fullPageHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight,
    )

    if (position / fullPageHeight >= scrollPercent && !triggerAsset) {
      setTriggerAsset(true)
    }
  }, [position, scrollPercent, delay, triggerAsset])

  if (!shouldShowAsset) return null

  return children
}
