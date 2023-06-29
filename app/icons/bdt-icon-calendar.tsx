import React from 'react'
import type {BdtIconProps} from './common-types.js'

export function BdtIconCalendar({fill, ...attrs}: BdtIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...attrs}>
      <g fill={fill} fillRule="evenodd" stroke="none" strokeWidth="1">
        <path d="M18 5a2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h12zm0 1H6a1 1 0 00-.993.883L5 7v11a1 1 0 00.883.993L6 19h12a1 1 0 00.993-.883L19 18V7a1 1 0 00-.883-.993L18 6z" />
        <rect width="1" height="4" x="8" y="4" rx="0.5" />
        <rect width="1" height="4" x="15" y="4" rx="0.5" />
        <path d="M4 9H20V10H4z" />
      </g>
    </svg>
  )
}
