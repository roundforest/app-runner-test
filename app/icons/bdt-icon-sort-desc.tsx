import React from 'react'
import type {BdtIconProps} from './common-types.js'

export function BdtIconSortDesc({fill, ...attrs}: BdtIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...attrs}>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <path
          fill={fill}
          d="M10.77 4.291a1 1 0 011.318-.082l.094.082 5.67 5.649a.5.5 0 01-.635.766l-.07-.057L11.477 5l-5.624 5.601a.5.5 0 01-.764-.64l.058-.068L10.77 4.29zm.73 3.135a.5.5 0 01.492.41l.008.09v12a.5.5 0 01-.992.09l-.008-.09v-12a.5.5 0 01.5-.5z"
          transform="rotate(-180 11.5 12.213)"
        />
      </g>
    </svg>
  )
}
