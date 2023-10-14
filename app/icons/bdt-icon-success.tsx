import React from 'react'

import type {BdtIconProps} from './common-types.js'

export function BdtIconSuccess({...attrs}: BdtIconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...attrs}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.00065 14.6666C11.6825 14.6666 14.6673 11.6819 14.6673 7.99998C14.6673 4.31808 11.6825 1.33331 8.00065 1.33331C4.31875 1.33331 1.33398 4.31808 1.33398 7.99998C1.33398 11.6819 4.31875 14.6666 8.00065 14.6666ZM7.33403 11.0809L11.8054 6.60946L10.8626 5.66665L7.33403 9.19524L5.13877 6.99998L4.19596 7.94279L7.33403 11.0809Z"
        fill="#61c200"
      />
    </svg>
  )
}
