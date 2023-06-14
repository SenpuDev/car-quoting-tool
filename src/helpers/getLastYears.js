export const getLastYears = () => {
  const currentYear = new Date().getFullYear()
  const lastYears = Array.from(new Array(20), (value, index) => currentYear - index)
  return lastYears
}
