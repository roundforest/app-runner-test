import {useCallback} from 'react'
import {useInView, type IntersectionOptions} from 'react-intersection-observer'
import type {makeClient} from '@roundforest/ga-commons'
import type {Product} from '../models'
import {gaClient} from '~/utils/ga/gtag.client'

export function useReportWidgetSeen(
  {name, placement, triggerType, variation, category}: WidgetSeenEventPayload,
  config?: IntersectionOptions,
) {
  const [ref] = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView) {
        gaClient.sendWidgetSeen({
          widget_name: name,
          widget_place: placement,
          trigger_type: triggerType,
          variation,
          event_category: category,
        })
      }
    },
    ...config,
  })

  return [ref]
}
export function useReportItemSeen(
  {
    item_list_id,
    item_name,
    item_source,
    partner_item_brand,
    partner_item_id,
    affiliation,
    currency,
    is_dws,
    price,
    click_element_name,
    index,
    variation,
  }: Parameters<ReturnType<typeof makeClient>['sendViewItem']>[0],
  config?: IntersectionOptions,
) {
  const [ref] = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView) {
        gaClient.sendViewItem({
          item_list_id,
          item_name,
          item_source,
          partner_item_brand,
          partner_item_id,
          affiliation,
          currency,
          is_dws,
          price,
          click_element_name,
          index,
          variation,
        })
      }
    },
    ...config,
  })

  return [ref]
}

// export function useReportMarketingAssetWidgetSeen(
//   {
//     placement,
//     trigger,
//     variation,
//   }: {
//     placement: Placement
//     trigger: Trigger
//     variation?: string
//   },
//   config?: IntersectionOptions,
// ) {
//   const [widgetSeenRef] = useInView({
//     triggerOnce: true,
//     onChange: (inView) => {
//       if (!inView) return

//       gaClient?.sendWidgetSeen({
//         widget_name: placement,
//         trigger_type: trigger,
//         variation,
//         widget_place: placement,
//       })
//     },
//     ...config,
//   })

//   return [widgetSeenRef]
// }

export function useReportWidgetClickCallback() {
  return useCallback((props: UseReportWidgetClickCallbackProps) => {
    gaClient?.sendWidgetClicked({
      widget_name: props.name,
      widget_place: props.placement,
      trigger_type: props.triggerType,
      clicked_element: props.clickElement,
      variation: props.variation,
    })
  }, [])
}

export function useSendPartnerProductClickout({
  product,
  index,
  listName,
  locale,
  currencyCode,
  categorySlug,
  categoryName,
}: useSendPartnerProductClickoutParameters) {
  return useCallback(() => {
    gaClient?.sendPartnerClickout({
      index: index,
      item_list_id: categorySlug,
      item_name: product.title,
      item_brand: product.brandName ?? undefined,
      item_category: categoryName,
      partner_item_id: product.publicItemId,
      item_variant: product.productCode,
      partner_item_brand: product.brandName ?? 'unknown',
      click_element_name: listName,
      price: product.price,
      currency: currencyCode,
      discount: product.discount ?? undefined,
      location_id: locale,
      affiliation: product.shop,
      target: product.redirectLinkTo,
      traffic: 'unknown',
      is_dws: product.source === 'dws',
      gclid: undefined,
      sys_id: undefined,
      click_id: product.clickId,
    })
    // @ts-expect-error As a temporary solution to test bing analytics
    if (window?.uetq) {
      // @ts-expect-error As a temporary solution to test bing analytics
      window.uetq.push({ec: 'Engagements', ea: 'ClickOut', el: 'General', ev: '0'})
    }
  }, [categorySlug, categoryName, index, product, listName, locale, currencyCode])
}

export function useSendCustomEvent() {
  return useCallback((eventName: string, eventParams: Record<string, any>) => {
    gaClient?.sendCustomEvent(eventName, eventParams)
  }, [])
}

export type WidgetSeenEventPayload = {
  name: Parameters<ReturnType<typeof makeClient>['sendWidgetSeen']>[0]['widget_name']
  placement: Parameters<ReturnType<typeof makeClient>['sendWidgetSeen']>[0]['widget_place']
  triggerType?: Parameters<ReturnType<typeof makeClient>['sendWidgetSeen']>[0]['trigger_type']
  variation?: Parameters<ReturnType<typeof makeClient>['sendWidgetSeen']>[0]['variation']
  category?: Parameters<ReturnType<typeof makeClient>['sendWidgetSeen']>[0]['event_category']
}
export type ItemSeenEventPayload = {
  index: number
  slug: Parameters<ReturnType<typeof makeClient>['sendViewItem']>[0]['event_category']
  title: Parameters<ReturnType<typeof makeClient>['sendViewItem']>[0]['item_name']
  brand: Parameters<ReturnType<typeof makeClient>['sendViewItem']>[0]['partner_item_brand']
  itemId: Parameters<ReturnType<typeof makeClient>['sendViewItem']>[0]['partner_item_id']
  shop: Parameters<ReturnType<typeof makeClient>['sendViewItem']>[0]['affiliation']
  currency: Parameters<ReturnType<typeof makeClient>['sendViewItem']>[0]['currency']
  isDws: Parameters<ReturnType<typeof makeClient>['sendViewItem']>[0]['is_dws']
  price: Parameters<ReturnType<typeof makeClient>['sendViewItem']>[0]['price']
  condition: Parameters<ReturnType<typeof makeClient>['sendViewItem']>[0]['variation']
  itemSource: Parameters<ReturnType<typeof makeClient>['sendViewItem']>[0]['item_source']
}

export type SeenItemEventPayload = {
  item_list_id: string
  partner_item_id: string
  partner_item_brand: string
  item_name: string
  affiliation: string
  sales_rank: number | null
  placement_id?: string
  index: number
  item_source: 'widget' | 'list'
  widget_name?: string
  price?: number
  currency?: string
  seller?: string
  click_element_name?: string | undefined
  is_dws: boolean
  event_category?: string
  variation?: string
}

export interface UseReportWidgetClickCallbackProps {
  variation?: Parameters<ReturnType<typeof makeClient>['sendWidgetClicked']>[0]['variation']
  name: Parameters<ReturnType<typeof makeClient>['sendWidgetClicked']>[0]['widget_name']
  placement: Parameters<ReturnType<typeof makeClient>['sendWidgetClicked']>[0]['widget_place']
  triggerType?: Parameters<ReturnType<typeof makeClient>['sendWidgetClicked']>[0]['trigger_type']
  clickElement?: Parameters<ReturnType<typeof makeClient>['sendWidgetClicked']>[0]['clicked_element']
}
export type useSendPartnerProductClickoutParameters = {
  product: Product
  index: number
  listName: string
  locale: string
  currencyCode: string
  categorySlug: string
  categoryName: string
}
