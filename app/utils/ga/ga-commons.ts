import {makeGEvents, serializeSticky} from './serialize.js'
import {version} from './version.js'
import {makeEventsMiddleware} from './eventsMiddleware.js'

type GoogleAnalyticsClientOptions = {
  fullUrl: string
  referrer: string
  userTimezone: string
  timezoneOffset: number
  pageLoadId: string
  pageLoadIdServer?: string
  abTestFlags: Record<string, string>
  labels?: Record<string, string>
  abTestsHash: string
  featureFlags: Record<string, string>
  ffHash: string
  convKey?: string
  convId?: string
  enableEventsMiddleware?: boolean
  experimentPropertyId?: string
  remarketingPropertyId?: string
}

export const GOOGLE_ADS_KEY = 'AW-978239894'
export const GOOGLE_ADS_ID = 'CFwgCNW7wFkQloO70gM'

export function makeClient(
  ga: any,
  {
    fullUrl: full_url,
    referrer,
    timezoneOffset: timezone_offset,
    userTimezone: user_timezone,
    pageLoadId: page_load_id,
    pageLoadIdServer: page_load_id_server,
    abTestFlags,
    labels,
    abTestsHash,
    featureFlags: _featureFlags,
    ffHash,
    convKey,
    convId,
    enableEventsMiddleware,
    experimentPropertyId,
    remarketingPropertyId,
  }: GoogleAnalyticsClientOptions,
) {
  const parserUrl = new URL(full_url)
  const url_host = parserUrl.host
  const url_path = parserUrl.pathname
  const url_parameters = Object.fromEntries(Object(parserUrl.searchParams))

  let stickySerialized: [key: string, value: string | number | boolean | null][] | undefined
  try {
    stickySerialized = serializeSticky({
      timezone_offset,
      user_timezone,
      client_version: version,
      url_host,
      url_path,
      page_load_id,
      page_load_id_server,
      ab_tag: abTestsHash,
      ff_tag: ffHash,
    })
  } catch (err: any) {
    sendException({
      description: err.message,
      fatal: true,
    })
    stickySerialized = serializeSticky(
      {
        timezone_offset,
        user_timezone,
        client_version: version,
        url_host,
        url_path,
        page_load_id,
        page_load_id_server,
        ab_tag: abTestsHash,
        ff_tag: ffHash,
      },
      true,
    )
    console.error(err)
  }

  const eventsMiddleware =
    enableEventsMiddleware && experimentPropertyId
      ? makeEventsMiddleware({ga, experimentPropertyId})
      : null

  const urlParametersSerialized = makeGEvents(
    'url_parameters',
    {
      referrer,
      full_url,
      ...url_parameters,
      ad_id: url_parameters.gclid,
      ad_type: 'GCLID',
    },
    stickySerialized,
  )

  if (eventsMiddleware) {
    eventsMiddleware.saveEvent(
      makeGEvents(
        'url_parameters',
        {
          referrer,
          full_url,
          ...url_parameters,
          ad_id: url_parameters.gclid,
          ad_type: 'GCLID',
        },
        stickySerialized,
      ),
    )
  }

  sendGEvents(
    urlParametersSerialized.concat(
      Object.entries({...(abTestFlags ?? {}), ...(labels ?? {})})
        .map(([key, value]) => {
          if (eventsMiddleware) {
            eventsMiddleware.saveEvent(
              makeGEvents(
                'ab_test',
                {ab_test_name: key, ab_test_value: `${value}`},
                stickySerialized,
              ),
            )
          }
          return makeGEvents(
            'ab_test',
            {ab_test_name: key, ab_test_value: `${value}`},
            stickySerialized,
          )
        })
        .flat(),
    ),
  ).catch((error) => console.error(error))

  return {
    sendCustomEvent(eventName: string, eventParameters: Record<string, any>) {
      return sendGEvents(makeGEvents(eventName, eventParameters, stickySerialized, 1))
    },

    sendPageInfoEvent(eventParameters: {[x: string]: any; event_category?: any}) {
      if (eventsMiddleware) {
        eventsMiddleware.saveEvent(
          makeGEvents(
            'page_additional_info',
            {
              ...eventParameters,
              event_category: eventParameters.event_category || 'ecommerce',
            },
            stickySerialized,
          ),
        )
      }

      return sendGEvents(
        makeGEvents(
          'page_additional_info',
          {
            ...eventParameters,
            event_category: eventParameters.event_category || 'ecommerce',
          },
          stickySerialized,
        ),
      )
    },

    sendPageItemsInfo(eventParameters: {
      count_items_in_non_list: number
      count_items_in_list: number
      count_dws_items_in_non_list: number
      count_dws_items_in_list: number
      amazon_browse_node_id?: string
      amazon_browse_node_name?: string
    }) {
      if (eventsMiddleware) {
        eventsMiddleware.saveEvent(
          makeGEvents(
            'page_items_info',
            {
              ...eventParameters,
            },
            stickySerialized,
          ),
        )
      }
      return sendGEvents(
        makeGEvents(
          'page_items_info',
          {
            ...eventParameters,
          },
          stickySerialized,
        ),
      )
    },

    sendSearch(eventParameters: {search_term: string}) {
      if (eventsMiddleware) {
        eventsMiddleware.saveEvent(makeGEvents('search', eventParameters, stickySerialized))
      }
      return sendGEvents(makeGEvents('search', eventParameters, stickySerialized))
    },

    sendShare(eventParameters: {entity_shared: string; url: string}) {
      if (eventsMiddleware) {
        eventsMiddleware.saveEvent(makeGEvents('share', eventParameters, stickySerialized))
      }

      return sendGEvents(makeGEvents('share', eventParameters, stickySerialized))
    },

    sendFeedbackSubmission(eventParameters: {rate: number; review_text: string}) {
      if (eventsMiddleware) {
        eventsMiddleware.saveEvent(
          makeGEvents('feedback_submission', eventParameters, stickySerialized),
        )
      }

      return sendGEvents(makeGEvents('feedback_submission', eventParameters, stickySerialized))
    },

    sendSelectContent(eventParameters: {
      content_type: 'list' | 'item'
      list_id: string
      content_index: number
    }) {
      if (eventsMiddleware) {
        eventsMiddleware.saveEvent(makeGEvents('select_content', eventParameters, stickySerialized))
      }
      return sendGEvents(makeGEvents('select_content', eventParameters, stickySerialized))
    },

    sendPartnerClickout({
      click_id: client_click_id,
      ad_id,
      ad_type,
      ...rest
    }: {
      item_list_id: string
      partner_item_id: string
      partner_item_brand: string
      item_name: string
      affiliation: string
      currency?: string
      discount?: number
      placement_id?: string
      index: number
      item_brand?: string
      item_category?: string
      item_category2?: string
      item_category3?: string
      item_category4?: string
      item_category5?: string
      item_variant?: string
      location_id?: string
      price?: number
      gclid: string | undefined
      ad_id?: string | undefined
      ad_type?: string | undefined
      sys_id: string | undefined
      target: string
      seller?: string
      click_id?: number
      traffic: string
      is_dws: boolean
      dws_type?: 'exclusive' | 'nonexclusive' | 'standard' | undefined
      click_element_name: string | undefined
      event_category?: string
    }) {
      const newEventParameters = {
        ...rest,
        ad_id: ad_id || rest.gclid,
        ad_type: ad_type ? ad_type : rest.gclid ? 'GCLID' : null,
        client_click_id,
      }
      const conversionEvent =
        convKey && convId ? makeGEvents('conversion', {send_to: `${convKey}/${convId}`}) : []

      if (eventsMiddleware) {
        eventsMiddleware.saveEvent([
          ...makeGEvents(
            'partner_clickout',
            {
              ...newEventParameters,
              event_category: newEventParameters.event_category || 'ecommerce',
              item_id: `${newEventParameters.affiliation}-${newEventParameters.partner_item_id}`,
            },
            stickySerialized,
            1,
            [
              'event_category',
              'item_list_id',
              'item_id',
              'partner_item_id',
              'partner_item_brand',
              'item_name',
              'affiliation',
              'index',
              'item_category',
              'price',
              'gclid',
              'ad_id',
              'ad_type',
              'sys_id',
              'target',
              'traffic',
            ],
          ),
          ...conversionEvent,
        ])
      }

      return sendGEvents([
        ...makeGEvents(
          'partner_clickout',
          {
            ...newEventParameters,
            event_category: newEventParameters.event_category || 'ecommerce',
            item_id: `${newEventParameters.affiliation}-${newEventParameters.partner_item_id}`,
          },
          stickySerialized,
          1,
          [
            'event_category',
            'item_list_id',
            'item_id',
            'partner_item_id',
            'partner_item_brand',
            'item_name',
            'affiliation',
            'index',
            'item_category',
            'price',
            'gclid',
            'ad_id',
            'ad_type',
            'sys_id',
            'target',
            'traffic',
          ],
        ),
        ...conversionEvent,
      ])
    },

    sendViewItem(eventParameters: {
      item_list_id: string
      partner_item_id: string
      partner_item_brand: string
      item_name: string
      affiliation: string
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
    }) {
      if (eventsMiddleware) {
        eventsMiddleware.saveEvent(
          makeGEvents(
            'view_item',
            {
              ...eventParameters,
              event_category: eventParameters.event_category || 'ecommerce',
              item_id: `${eventParameters.affiliation}-${eventParameters.partner_item_id}`,
            },
            stickySerialized,
          ),
        )
      }

      return sendGEvents(
        makeGEvents(
          'view_item',
          {
            ...eventParameters,
            event_category: eventParameters.event_category || 'ecommerce',
            item_id: `${eventParameters.affiliation}-${eventParameters.partner_item_id}`,
          },
          stickySerialized,
        ),
      )
    },

    sendCopyCoupon(eventParameters: {
      item_list_id: string
      partner_item_id: string
      partner_item_brand: string
      item_name: string
      affiliation: string
      index: number
      button_place: 'list' | 'modal' | 'dialog_box'
      event_category?: string
    }) {
      if (eventsMiddleware) {
        eventsMiddleware.saveEvent(
          makeGEvents(
            'copy_coupon',
            {
              ...eventParameters,
              event_category: eventParameters.event_category || 'ecommerce',
              item_id: `${eventParameters.affiliation}-${eventParameters.partner_item_id}`,
            },
            stickySerialized,
          ),
        )
      }

      return sendGEvents(
        makeGEvents(
          'copy_coupon',
          {
            ...eventParameters,
            event_category: eventParameters.event_category || 'ecommerce',
            item_id: `${eventParameters.affiliation}-${eventParameters.partner_item_id}`,
          },
          stickySerialized,
        ),
      )
    },

    sendWidgetSeen(eventParameters: {
      widget_name: string
      count_products?: number
      count_dws_items?: number
      widget_place: string
      trigger_type?: string
      variation?: string
      event_category?: string
    }) {
      if (eventParameters.variation?.includes('not_seen'))
        eventParameters.widget_name = eventParameters.widget_name + '_not_seen'

      if (eventsMiddleware) {
        eventsMiddleware.saveEvent(
          makeGEvents(
            'widget_seen',
            {
              ...eventParameters,
              event_category: eventParameters.event_category || 'ecommerce',
            },
            stickySerialized,
          ),
        )
      }

      return sendGEvents(
        makeGEvents(
          'widget_seen',
          {
            ...eventParameters,
            event_category: eventParameters.event_category || 'ecommerce',
          },
          stickySerialized,
        ),
      )
    },

    sendWidgetClicked(eventParameters: {
      widget_name: string
      widget_place: string
      trigger_type?: string
      clicked_element?:
        | 'image'
        | 'cta-button'
        | 'coupon'
        | 'score'
        | 'badge'
        | 'brand'
        | 'name'
        | 'discount'
        | 'wish-list-button'
        | 'amazon-logo'
        | 'close-button'
        | 'feedback-star'
        | 'feedback-input'
      variation?: string
      event_category?: string
    }) {
      if (eventsMiddleware) {
        eventsMiddleware.saveEvent(
          makeGEvents(
            'widget_clicked',
            {
              ...eventParameters,
              event_category: eventParameters.event_category || 'ecommerce',
            },
            stickySerialized,
          ),
        )
      }

      return sendGEvents(
        makeGEvents(
          'widget_clicked',
          {
            ...eventParameters,
            event_category: eventParameters.event_category || 'ecommerce',
          },
          stickySerialized,
        ),
      )
    },

    sendItemTabClick(eventParameters: {
      tab_name: string
      partner_item_id: string
      partner_item_brand: string
      affiliation: string
      event_category?: string
    }) {
      if (eventsMiddleware) {
        eventsMiddleware.saveEvent(
          makeGEvents(
            'item_tab_click',
            {
              ...eventParameters,
              event_category: eventParameters.event_category || 'ecommerce',
              item_id: `${eventParameters.affiliation}-${eventParameters.partner_item_id}`,
            },
            stickySerialized,
          ),
        )
      }

      return sendGEvents(
        makeGEvents(
          'item_tab_click',
          {
            ...eventParameters,
            event_category: eventParameters.event_category || 'ecommerce',
            item_id: `${eventParameters.affiliation}-${eventParameters.partner_item_id}`,
          },
          stickySerialized,
        ),
      )
    },

    sendWebVitals(eventParameters: {
      metric_name: string
      delta: number
      value: number
      id: string
      rating: string
    }) {
      if (eventsMiddleware) {
        eventsMiddleware.saveEvent(
          makeGEvents(
            'web-vital',
            {
              ...eventParameters,
            },
            stickySerialized,
          ),
        )
      }

      return sendGEvents(
        makeGEvents(
          'web-vitals',
          {
            ...eventParameters,
          },
          stickySerialized,
        ),
      )
    },

    reportForRemarketingViewItem(eventParameters: {slug: string}) {
      const {slug} = eventParameters

      return sendGEvents(
        makeGEvents(
          'view_item',
          {
            id: slug,
            list_signature: `${slug} 'google_business_vertical':'custom'`,
            send_to: remarketingPropertyId,
          },
          stickySerialized,
        ),
      )
    },

    reportForRemarketingAddToCart(eventParameters: {slug: string}) {
      const {slug} = eventParameters

      return sendGEvents(
        makeGEvents(
          'add_to_cart',
          {
            id: slug,
            item_signature: `${slug} 'google_business_vertical':'custom'`,
            send_to: remarketingPropertyId,
          },
          stickySerialized,
        ),
      )
    },

    sendException(eventParameters: {description: string; fatal: boolean}) {
      if (eventsMiddleware) {
        eventsMiddleware.saveEvent(makeGEvents('exception', eventParameters))
      }
      return sendException(eventParameters)
    },

    approveEventsReporting() {
      if (!eventsMiddleware) return () => {}
      return eventsMiddleware.approveEventsReporting()
    },

    stickySerialized, // This is added to client just for tests
  }

  function sendException(eventParameters: {description: string; fatal: boolean}) {
    return sendGEvents(makeGEvents('exception', eventParameters))
  }

  function sendGEvents(gEvents: [key: string, values: Record<string, any>][]) {
    return allSettled(
      gEvents.map(
        ([eventName, eventParams]) =>
          new Promise((res, rej) =>
            ga('event', eventName, {
              ...eventParams,
              /**
               * @param {Error} error
               * @param {any} response
               */
              event_callback: (error: Error, response: any) => (error ? rej(error) : res(response)),
            }),
          ),
      ),
    )
  }
}

function allSettled(promises: Promise<string>[]) {
  const wrappedPromises = promises.map((p) =>
    p.then(
      (val) => ({status: 'fulfilled', value: val}),
      (err) => ({status: 'rejected', reason: err}),
    ),
  )
  return Promise.all(wrappedPromises)
}
