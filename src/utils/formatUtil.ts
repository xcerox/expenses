
export const splitDate = (date: Date) => ({
  month: date.toLocaleString('en-US', { month: 'long' }),
  day: date.toLocaleString('en-US', { day: '2-digit' }),
  year: date.getFullYear()
})

export const formatToInput = (date: Date) => {
  return date.toISOString().split('T')[0];
}

export const formatToFullYear = (date: Date) => {
  return date.getFullYear().toString();
}