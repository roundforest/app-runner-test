import {createCookie} from '@remix-run/node'
import cryptoRandomString from 'crypto-random-string'

export const userId = createCookie('user_id', {
  path: '/',
  sameSite: 'lax',
  maxAge: 31536000,
})
export const sessionId = createCookie('session_id', {})
export const pageId = createCookie('page_id', {})

export function makeId() {
  return cryptoRandomString({length: 10, type: 'numeric'}).toString()
}
