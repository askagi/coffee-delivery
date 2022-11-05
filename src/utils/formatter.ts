export const priceFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export function formatCurrentCep(cep: number) {
  const filterCep = String(cep).replace(/[^\w\s]|\s|[A-Z]/gi, '')
  return filterCep.replace(/(\d{5})(\d{1})/, '$1-$2')
}
