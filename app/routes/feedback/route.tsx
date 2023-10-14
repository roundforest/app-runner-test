import type {ActionFunctionArgs} from '@remix-run/node'
import {json} from '@remix-run/node'
import env from 'env-var'
import {hostNameByLocale, mapHostHeaderToLocaleParams} from '~/utils/map-locale'

export async function action({request}: ActionFunctionArgs) {
  const bdtBotSlackTokenProd = env.get('BDT_BOT_SLACK_TOKEN').required().asString()
  const slackToken = process.env.NODE_ENV === 'production' ? bdtBotSlackTokenProd : 'some-dev-token'
  const body = await request.formData()
  const rating = body.get('rating')
  const review = body.get('review')
  const slug = body.get('slug') || ''

  const apiUrl = 'https://slack.com/api/chat.postMessage'
  const host = request.headers.get('host') || ''
  const {protocol} = new URL(request.url)

  const {locale} = mapHostHeaderToLocaleParams(host)

  const starRating = '★'.repeat(Number(rating)).padEnd(5, '☆')
  const hostName = hostNameByLocale[locale] ?? 'www.bestdeals.today'
  const listUrl = new URL(`/${slug.toString()}`, `${protocol}//${hostName}`)

  const reportMessage = Object.entries({
    List: listUrl,
    Rating: starRating,
    Review: review,
  })
    .map(([key, value]) => `${key}: ${value}`)
    .join(`\n`)

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify({
        channel: 'bdt-user-feedback',
        text: reportMessage,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Bearer ${slackToken}`,
      },
    })

    const data = await response.json()
    return json({feedbackResponse: data})
  } catch (e: any) {
    return json({feedbackResponse: {ok: false, error: e.message}})
  }
}
