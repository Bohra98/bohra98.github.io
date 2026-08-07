import { useEffect, useState } from 'react'

export function useClock(timeZone: string) {
  const [time, setTime] = useState('')

  useEffect(() => {
    function tick() {
      setTime(
        new Intl.DateTimeFormat('en-GB', {
          timeZone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(new Date()),
      )
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [timeZone])

  return time
}
