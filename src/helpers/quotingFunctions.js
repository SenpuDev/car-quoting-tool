export function getYearDiference (year) {
  return new Date().getFullYear() - year
}

export function brandIncrease (brand) {
  let increase

  switch (brand) {
    case '1':
      increase = 1.3
      break
    case '2':
      increase = 1.15
      break
    case '3':
      increase = 1.05
      break

    default:
      break
  }
  return increase
}

export function planIncrease (plan) {
  return plan === '1' ? 1.2 : 1.5
}

export function formatToPrice (number) {
  return number.toLocaleString('es-ES', {
    style: 'currency',
    currency: 'EUR'
  })
}
