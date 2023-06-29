import React from 'react'
import type {BdtIconProps} from './common-types.js'

export function BdtIconSearch({fill, ...attrs}: BdtIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...attrs}
    >
      <defs>
        <path id="smwvojkkoa" d="M0 0h24v24H0z" />
      </defs>
      <g fillRule="evenodd">
        <mask id="9wmkz4fr7b" fill="#fff">
          <use xlinkHref="#smwvojkkoa" />
        </mask>
        <path
          fill={fill}
          d="M16.943 15.562a8.373 8.373 0 001.8-5.183C18.743 5.767 14.984 2 10.36 2 5.736 2 2 5.767 2 10.379s3.759 8.379 8.36 8.379c1.845 0 3.69-.64 5.17-1.804L20.566 22 22 20.562l-5.057-5zm-6.583 1.53c-3.66 0-6.652-2.998-6.652-6.667 0-3.67 2.991-6.667 6.652-6.667 3.66 0 6.651 2.998 6.651 6.667 0 3.669-2.99 6.666-6.651 6.666z"
          mask="url(#9wmkz4fr7b)"
        />
      </g>
    </svg>
  )
}
