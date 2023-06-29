import React from 'react'
import type {BdtIconProps} from './common-types.js'

export function BdtIconSortAsc({fill, ...attrs}: BdtIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...attrs}>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <path
          fill={fill}
          d="M11.27 3.997a1 1 0 011.318-.083l.094.083 5.67 5.649a.5.5 0 01-.635.766l-.07-.058-5.67-5.648-5.624 5.6a.5.5 0 01-.764-.639l.058-.069 5.623-5.6zM12 7.132a.5.5 0 01.492.41l.008.09v12a.5.5 0 01-.992.09l-.008-.09v-12a.5.5 0 01.5-.5z"
        />
      </g>
    </svg>
  )
}
