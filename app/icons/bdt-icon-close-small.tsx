import React, {type FunctionComponent} from 'react'

import type {BdtIconProps} from './common-types.js'

export const IconCloseSmall: FunctionComponent<BdtIconProps> = ({fill, ...attributes}) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...attributes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.19526 2.19526C2.45561 1.93491 2.87772 1.93491 3.13807 2.19526L8 7.05719L12.8619 2.19526C13.1223 1.93491 13.5444 1.93491 13.8047 2.19526C14.0651 2.45561 14.0651 2.87772 13.8047 3.13807L8.94281 8L13.8047 12.8619C14.0651 13.1223 14.0651 13.5444 13.8047 13.8047C13.5444 14.0651 13.1223 14.0651 12.8619 13.8047L8 8.94281L3.13807 13.8047C2.87772 14.0651 2.45561 14.0651 2.19526 13.8047C1.93491 13.5444 1.93491 13.1223 2.19526 12.8619L7.05719 8L2.19526 3.13807C1.93491 2.87772 1.93491 2.45561 2.19526 2.19526Z"
        fill={fill}
      />
    </svg>
  )
}
