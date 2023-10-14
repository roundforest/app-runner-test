import React, {type FunctionComponent} from 'react'

import type {BdtIconProps} from './common-types.js'

export const IconFeedbackStar: FunctionComponent<BdtIconProps> = ({fill, stroke, ...attributes}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="27" fill="none" viewBox="0 0 29 27" {...attributes}>
      <path
        fill={fill ?? '#F4A403'}
        stroke={stroke ?? '#F4A403'}
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13.155 2.725c.55-1.114 2.14-1.114 2.69 0l2.714 5.5a1.5 1.5 0 001.13.82l6.07.883c1.23.178 1.72 1.69.83 2.558l-4.391 4.281a1.5 1.5 0 00-.432 1.328l1.037 6.045c.21 1.225-1.076 2.16-2.176 1.58l-5.429-2.853a1.5 1.5 0 00-1.396 0l-5.429 2.854c-1.1.578-2.386-.356-2.176-1.581l1.037-6.045a1.5 1.5 0 00-.432-1.328l-4.391-4.28c-.89-.869-.4-2.38.83-2.56l6.07-.881a1.5 1.5 0 001.13-.82l2.714-5.5z"
      ></path>
    </svg>
  )
}
