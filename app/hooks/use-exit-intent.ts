import {useEffect, useState} from 'react'

export const useExitIntent = () => {
  const [isExitIntent, setIsExitIntent] = useState(false)

  useEffect(() => {
    window.addEventListener('mouseout', onExitIntent)
    return () => {
      window.removeEventListener('mouseout', onExitIntent)
    }
  }, [])

  const onExitIntent = (e: MouseEvent) => {
    if (!e.relatedTarget && e.clientY < 10) {
      setIsExitIntent(true)
    }
  }
  return [isExitIntent]
}
