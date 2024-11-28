export default () => {
  const formatCurrency = (value: number, currency: string): string => {
    return `${currency}${value.toFixed(2)}`
  }
  return { formatCurrency }
}
