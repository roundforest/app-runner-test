import React, {type FunctionComponent} from 'react'
import {useReportWidgetClickCallback, useReportWidgetSeen} from '~/hooks/analytics-hooks'
import {IconCloseMedium} from '~/icons/bdt-icon-close-medium'
import {BdtIconSuccess} from '~/icons/bdt-icon-success'
import {useTranslation} from '~/localization/translation'

export interface ThankYouPopupProps {
  onClose: () => void
}

export const ThankYouPopup: FunctionComponent<ThankYouPopupProps> = ({onClose}) => {
  const translations = useTranslation()

  const [positiveFeedbackRef] = useReportWidgetSeen({
    name: 'thank-dialog',
    placement: 'screen',
    triggerType: 'click',
  })

  const sendWidgetClickEvent = useReportWidgetClickCallback()

  function handleOnClose() {
    sendWidgetClickEvent({
      clickElement: 'close-button',
      name: 'thank-dialog',
      placement: 'screen',
    })

    onClose()
  }
  return (
    <div
      ref={positiveFeedbackRef}
      aria-label="Thank dialog"
      data-testid="thank-dialog"
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-brightness-75 flex items-center justify-center z-50"
    >
      <div className="bg-white px-6 py-6 rounded-sm w-[clamp(288px,90vw,600px)] relative flex flex-col gap-5 items-stretch">
        <button className="cursor-pointer absolute h-8 right-5" onClick={handleOnClose}>
          <IconCloseMedium fill="#6b6b6b" />
        </button>
        <div className="flex flex-col items-center justify-between text-center py-8 gap-4">
          <BdtIconSuccess width="25px" height="25px" />
          <span className="not-italic font-bold text-3xl tablet:text-2xl text-gray-900 " aria-label="Thank dialog">
            {translations.Feedback.ThankDialog.title}
          </span>
          <span className="text-sm not-italic font-normal" aria-label="Thank dialog">
            {translations.Feedback.ThankDialog.subtitle}
          </span>
        </div>
      </div>
    </div>
  )
}
