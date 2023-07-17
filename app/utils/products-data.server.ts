import fakeProductsData from './fakeData'

export async function getRealData(searchTerm: string) {
  const res = await fetch(`https://www.bestdeals.today/bdt-proxy/${searchTerm}`)
  const data = await res.json()
  return data
}

export function getFakeData() {
  return fakeProductsData
}
