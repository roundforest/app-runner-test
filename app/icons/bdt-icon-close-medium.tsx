import React, {type FunctionComponent} from 'react'

import type {BdtIconProps} from './common-types.js'

export const IconCloseMedium: FunctionComponent<BdtIconProps> = ({fill, ...attributes}) => {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...attributes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.46967 2.46967C2.76256 2.17678 3.23744 2.17678 3.53033 2.46967L9 7.93934L14.4697 2.46967C14.7626 2.17678 15.2374 2.17678 15.5303 2.46967C15.8232 2.76256 15.8232 3.23744 15.5303 3.53033L10.0607 9L15.5303 14.4697C15.8232 14.7626 15.8232 15.2374 15.5303 15.5303C15.2374 15.8232 14.7626 15.8232 14.4697 15.5303L9 10.0607L3.53033 15.5303C3.23744 15.8232 2.76256 15.8232 2.46967 15.5303C2.17678 15.2374 2.17678 14.7626 2.46967 14.4697L7.93934 9L2.46967 3.53033C2.17678 3.23744 2.17678 2.76256 2.46967 2.46967Z"
        fill={fill}
      />
    </svg>
  )
}
