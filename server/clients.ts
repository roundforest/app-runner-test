import {makeClient} from '@roundforest/bdt-client'
import {makeClient as makeFakeClient} from '@roundforest/bdt-client/fake'

const client = makeClient('https://www.bestdeals.today/bdt-store-page/api/')
const fakeClient = makeFakeClient()

export const getData = async (searchTerm: string) => {
  try {
    const data = await client.getProductsAndMetadata(searchTerm)
    return data
  } catch (e) {
    throw e
  }
}

export const getFakeData = async (searchTerm: string) => {
  try {
    const data = await fakeClient.getProductsAndMetadata(searchTerm)
    return data
  } catch (e) {
    throw e
  }
}
