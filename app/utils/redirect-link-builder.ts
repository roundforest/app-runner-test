import {Buffer} from 'buffer'
import {buildUrl} from '@roundforest/url-commons'
import type {Product} from '~/types'

function correctProductCodeForReporting(productCode: string): string {
  const productCodeParts = (productCode.includes('_') ? productCode.replaceAll('_', '-') : productCode).split('-')
  productCodeParts[1] = productCodeParts[1].toLowerCase()

  return productCodeParts.join('-')
}

export function buildRedirectLink(product: Product, slug: string): string {
  return buildUrl(
    '/internal-redirect',
    typeof window !== 'undefined' ? window.location.origin : 'https://www.bestdeals.today',
    {
      source: product.source,
      productCode: correctProductCodeForReporting(product.productCode),
      position: product.position,
      url: Buffer.from(product.redirectLinkTo).toString('base64'),
      slug,
    },
  ).toString()
}
