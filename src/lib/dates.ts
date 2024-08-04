import dayjs from 'dayjs'

export function toLocalDateString(date: Date) {
  // Formateo a "31/jul/2024 10:35am"
  const formattedDate = dayjs(date).format('DD/MMM/YYYY h:mma')
  console.log(formattedDate)
}
