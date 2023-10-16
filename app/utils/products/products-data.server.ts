import {buildUrl} from '@roundforest/url-commons'
import fakeProductsData from './fakeData'

export async function getRealData(
  searchTerm = '',
  domain = 'bestdeals.today',
  locale = 'us',
  sortingStrategyType = 'marketplace',
  isBot?: boolean,
  ignoreConnexityRateLimit?: boolean,
) {
  const url = buildUrl(
    'deals/deals/search',
    'http://ad0d6a7ebe7eb47eab9d3b37da8b5e62-c166d8320b217e04.elb.us-east-1.amazonaws.com',
    {
      searchTerm,
      domain,
      locale,
      sortingStrategyType,
      isBot,
      ignoreConnexityRateLimit,
    },
  )
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',

    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({sortingStrategyParams: {}}),
  })

  const data = await response.json()
  return data
}

export function getFakeData() {
  return fakeProductsData
}
