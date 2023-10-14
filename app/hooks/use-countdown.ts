import {useEffect, useState} from 'react'

const hourMs = 1000 * 60 * 60
const minutesMs = 1000 * 60

export const useCountdown = (targetDate: Date) => {
  const countDownDate = new Date(targetDate).getTime()

  const [countDown, setCountDown] = useState(countDownDate - new Date().getTime())

  useEffect(() => {
    const isExpired = countDownDate - new Date().getTime() <= 0
    if (!isExpired) {
      const interval = setInterval(() => {
        setCountDown(countDownDate - new Date().getTime())
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [countDownDate])

  return getTimeValues(countDown)
}

const getTimeValues = (currentTime: number) => {
  const hours = Math.floor(currentTime / hourMs)
  const minutes = Math.floor((currentTime % hourMs) / minutesMs)
  const seconds = Math.floor((currentTime % minutesMs) / 1000)

  return [hours, minutes, seconds]
}
