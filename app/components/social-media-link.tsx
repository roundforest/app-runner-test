import React from 'react'
import type {BdtIconProps} from '../icons/common-types.js'
import {BdtIconFacebookLogo} from '../icons/bdt-icon-facebook-logo.js'
import {BdtIconInstagramLogo} from '../icons/bdt-icon-instagram-logo.js'
import {BdtIconTiktokLogo} from '../icons/bdt-icon-tiktok-logo.js'
import {useReportWidgetClickCallback} from '../hooks/analytics-hooks.js'

const iconsMapping: Record<string, {icon: (attrs: BdtIconProps) => React.JSX.Element; link: string}> = {
  tiktok: {
    icon: BdtIconTiktokLogo,
    link: 'https://www.tiktok.com/@the.best.deals.today',
  },
  facebook: {icon: BdtIconFacebookLogo, link: 'https://www.facebook.com/groups/thebestdealstoday'},
  instagram: {icon: BdtIconInstagramLogo, link: 'https://www.instagram.com/bestdealstoday2023/'},
}

export function SocialMediaLink({platform}: SocialMediaLinkProps) {
  const sendWidgetClickEvent = useReportWidgetClickCallback()

  const SocialMediaIcon = iconsMapping[platform]?.icon

  return SocialMediaIcon ? (
    <a
      href={iconsMapping[platform].link}
      target="_blank"
      rel="noreferrer"
      onClick={() => {
        sendWidgetClickEvent({
          name: 'footer-social-media-link',
          placement: 'bottom',
          variation: JSON.stringify({platform}),
        })
      }}
    >
      <SocialMediaIcon />
    </a>
  ) : null
}

export interface SocialMediaLinkProps {
  platform: string
}
