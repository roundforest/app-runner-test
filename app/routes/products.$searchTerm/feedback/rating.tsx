import React, {useState, type FunctionComponent} from 'react'
import {useReportWidgetClickCallback, useReportWidgetSeen} from '~/hooks/analytics-hooks'
import {IconCloseSmall} from '~/icons/bdt-icon-close-small'
import {IconFeedbackStar} from '~/icons/bdt-icon-feedback-star'
import {useTranslation} from '~/localization/translation'

const STARS_RANGE = Array.from({length: 5})

export interface RatingProps {
  setRating: (rating: number) => void
  rating: number
  onClose: () => void
}

const Rating: FunctionComponent<RatingProps> = ({rating, setRating, onClose}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null | undefined>(null)
  const translations = useTranslation()

  const [ratingRef] = useReportWidgetSeen({
    name: 'feedback-request',
    placement: 'bottom',
  })

  const sendWidgetClickEvent = useReportWidgetClickCallback()

  function handleClose() {
    sendWidgetClickEvent({name: 'feedback-request', placement: 'bottom', clickElement: 'close-button'})
    onClose()
  }

  function handleStarHover(index: number) {
    setHoveredIndex(index)
  }

  function handleStarsLeave() {
    setHoveredIndex(null)
  }

  function handleStarClick(index: number) {
    sendWidgetClickEvent({
      name: 'feedback-request',
      placement: 'bottom',
      clickElement: 'feedback-star',
      triggerType: `feedback-star-${index + 1}`,
    })

    setTimeout(() => {
      return setRating(index + 1)
    }, 200)
  }
  return (
    <aside className="mx-4 pointer-events-none flex items-center justify-center fixed left-0 right-0 bottom-12 z-50">
      <footer
        ref={ratingRef}
        aria-label="Feedback request"
        className="relative flex flex-row mobile:flex-col gap-4 mobile:gap-2 justify-center items-center rounded-lg pointer-events-auto w-[466px] bg-white p-4 shadow-[0px_0px_4px_rgba(0,0,0,0.1),0px_4px_8px_rgba(0,0,0,0.1)]"
      >
        <span className="not-italic font-semibold text-sm leading-relaxed">{translations.Feedback.questionTitle}</span>
        <div className="flex flex-row gap-1" onMouseLeave={handleStarsLeave}>
          {STARS_RANGE.map((_, index) => {
            const isFullStar = index <= (hoveredIndex ?? rating - 1)
            const tooltipTitle =
              index == 0
                ? translations.Feedback.Tooltip.lowRating
                : index == 4
                ? translations.Feedback.Tooltip.highRating
                : undefined
            return (
              <React.Fragment key={`rating-star-${index + 1}`}>
                <div className="group relative flex justify-center">
                  {!!tooltipTitle && (
                    <span className="absolute bottom-10 scale-0 rounded-md w-28 text-center bg-gray-800 py-2 text-xs text-white group-hover:scale-100">
                      {tooltipTitle}
                    </span>
                  )}
                  <button
                    className=""
                    key={index}
                    aria-label={`Feedback rating star ${index + 1}`}
                    data-testid={`feedback-rating-star-${index + 1}`}
                    onMouseOver={() => handleStarHover(index)}
                    onClick={() => handleStarClick(index)}
                    onTouchStart={() => handleStarClick(index)}
                  >
                    <IconFeedbackStar
                      fill={isFullStar ? undefined : 'transparent'}
                      stroke={isFullStar ? undefined : '#DDD'}
                    />
                  </button>
                </div>
              </React.Fragment>
            )
          })}
        </div>
        <button
          className="w-5 h-5 cursor-pointer bg-none outline-none mobile:absolute mobile:right-4 mobile:top-4"
          aria-label="Close feedback request"
          onClick={handleClose}
        >
          <IconCloseSmall fill="#C2C2C2" />
        </button>
      </footer>
    </aside>
  )
}

export default Rating
