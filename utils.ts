import { addMinutes, format, isBefore, set } from 'date-fns'

export function generateWeekdaySlots(date: Date, duration: number) {
  const weekday = date.getDay()
  if (weekday === 0 || weekday === 6) return []

  const start = set(date, { hours: 16, minutes: 0, seconds: 0, milliseconds: 0 })
  const end = set(date, { hours: 23, minutes: 0, seconds: 0, milliseconds: 0 })

  const slots: { startsAt: Date; endsAt: Date; label: string }[] = []
  let cursor = new Date(start)

  while (cursor < end) {
    const slotEnd = addMinutes(cursor, duration)
    if (slotEnd <= end) {
      slots.push({
        startsAt: new Date(cursor),
        endsAt: new Date(slotEnd),
        label: `${format(cursor, 'HH:mm')}–${format(slotEnd, 'HH:mm')}`
      })
    }
    cursor = addMinutes(cursor, 15)
  }

  return slots
}

export function isExpired(iso: string | null | undefined) {
  if (!iso) return true
  return isBefore(new Date(iso), new Date())
}
