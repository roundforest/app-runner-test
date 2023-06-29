import React from 'react'
import type {BdtIconProps} from './common-types.js'

export function BdtIconClose({fill, ...attrs}: BdtIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...attrs}>
      <g fill={fill} fillRule="evenodd">
        <g>
          <g>
            <path
              d="M20 6.087L14.087 12 20 17.913 17.913 20 12 14.087 6.087 20 4 17.913 9.913 12 4 6.087 6.087 4 12 9.913 17.913 4z"
              transform="translate(-1762 -373) translate(1762 373)"
            />
          </g>
        </g>
      </g>
    </svg>
  )
}
