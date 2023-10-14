import React from 'react'
import type {BdtIconProps} from './common-types.js'

export function BdtIconChevronUp({fill, ...attrs}: BdtIconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...attrs}>
      <path
        d="M8.00065 11.6556L2.33398 5.98891L3.65621 4.66669L8.00065 9.01113L12.3451 4.66669L13.6673 5.98891L8.00065 11.6556Z"
        transform="rotate(180 8 8)"
        fill={fill}
      />
    </svg>
  )
}
