import React from 'react'
import type {BdtIconProps} from './common-types.js'

export function BdtIconShipping({fill, ...attrs}: BdtIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...attrs}>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <path
          fill={fill}
          fillRule="nonzero"
          d="M15.975 6a1 1 0 011 1l-.002.068-.064.925h1.324a2 2 0 011.991 2.19l-.467 4.905a1 1 0 01-.995.906l-1.174-.001c.05.157.076.325.076.5 0 .83-.592 1.5-1.323 1.5-.73 0-1.323-.67-1.323-1.5 0-.17.025-.336.072-.489H8.77c.047.153.072.318.072.49 0 .828-.592 1.5-1.323 1.5-.73 0-1.323-.672-1.323-1.5 0-.172.025-.337.072-.49H5a1 1 0 01-1-1l.003-.078.195-1.552a.5.5 0 01.996.035l-.003.09L5 15.005l2.367-.001a1.181 1.181 0 01.306 0h7.756l.027-.348L15.975 7H6.939a.5.5 0 01-.09-.992L6.94 6h9.036zm.91 2.993l-.428 5.675-.022.324 2.327.002.095-1.008h-.014a.5.5 0 01.09-.992l.019-.001.095-1h-1.114a.5.5 0 010-1h1.209l.087-.905.004-.094A1 1 0 0018.35 9l-.117-.006-1.348-.001zm-6.952 1a.5.5 0 110 1h-5a.5.5 0 110-1h5zm0-2a.5.5 0 010 1h-3a.5.5 0 110-1h3z"
        />
      </g>
    </svg>
  )
}