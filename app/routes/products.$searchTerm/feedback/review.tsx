import {useLoaderData} from '@remix-run/react'
import React, {type FunctionComponent, useState, useEffect} from 'react'
import {useFetcher} from 'react-router-dom'
import {useReportWidgetClickCallback, useReportWidgetSeen, useSendCustomEvent} from '~/hooks/analytics-hooks'
import {IconCloseMedium} from '~/icons/bdt-icon-close-medium'
import {useTranslation} from '~/localization/translation'
import {type LoaderDataProps} from '~/models'

export interface ReviewProps {
  isPositive: boolean
  review?: string
  rating: number
  nextStep: () => void
  onClose: () => void
}

const MAX_REVIEW_MESSAGE_LENGTH = 240

export const Review: FunctionComponent<ReviewProps> = ({isPositive, review, rating, nextStep, onClose}) => {
  const translations = useTranslation()

  const {slug} = useLoaderData<LoaderDataProps>()
  const [reviewForSlack, setReviewForSlack] = useState(review || '')
  const fetcher = useFetcher()

  useEffect(() => {
    if (fetcher.data?.feedbackResponse) {
      nextStep()
    }
  }, [fetcher.data?.feedbackResponse, nextStep])

  const [feedbackRef] = useReportWidgetSeen({
    name: 'review-dialog',
    placement: 'screen',
    triggerType: 'click',
  })

  const sendWidgetClickEvent = useReportWidgetClickCallback()
  const sendCustomEvent = useSendCustomEvent()

  const canSubmitReview =
    reviewForSlack && reviewForSlack.length > 0 && reviewForSlack.length <= MAX_REVIEW_MESSAGE_LENGTH

  function handleInput(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setReviewForSlack(event.target.value.slice(0, MAX_REVIEW_MESSAGE_LENGTH))
  }

  function handleOnClose() {
    sendWidgetClickEvent({
      clickElement: 'close-button',
      name: 'review-dialog',
      placement: 'screen',
      variation: reviewForSlack,
    })
    onClose()
  }

  return (
    <fetcher.Form
      method="POST"
      action="/feedback"
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-brightness-75 flex items-center justify-center z-50"
    >
      <div className="bg-white px-6 py-6 rounded-sm w-[clamp(288px,90vw,600px)] relative flex flex-col gap-5 items-stretch">
        <span className="not-italic font-bold text-xl text-gray-900" aria-label="Leave your feedback here">
          {translations.Feedback.Review.title(isPositive)}
        </span>
        <button className="cursor-pointer absolute h-8 right-5" onClick={handleOnClose}>
          <IconCloseMedium fill="#6b6b6b" />
        </button>
        <div className="relative" ref={feedbackRef}>
          <input type="hidden" name="rating" value={rating} />
          <input type="hidden" name="slug" value={slug} />
          <textarea
            rows={5}
            name="review"
            className="block p-2.5 w-full text-sm text-gray-900 bg-white border border-gray-300 focus:ring-transparent focus:border-gray-300 resize-none"
            aria-label="Feedback input field"
            data-testid="feedback-input"
            maxLength={MAX_REVIEW_MESSAGE_LENGTH}
            value={review}
            placeholder={translations.Feedback.Review.placeholder(isPositive)}
            onChange={handleInput}
          />
          <span className="absolute rounded-xl bg-[#f2f2f2] py-0 px-2 placeholder:text-sm font-normal text-sm text-[#aaaaaa]  bottom-2 right-5">
            {MAX_REVIEW_MESSAGE_LENGTH - reviewForSlack.length}
          </span>
        </div>
        <button
          className="text-white not-italic font-normal px-5 py-2 mr-auto text-base leading-5 text-center disabled:bg-[#d8d8d8] bg-[#61c200]"
          aria-label="feedback-button"
          data-testid="feedback-button"
          disabled={!canSubmitReview}
          onClick={() => {
            sendWidgetClickEvent({
              clickElement: 'cta-button',
              name: 'review-dialog',
              placement: 'screen',
              variation: reviewForSlack,
            })
            sendCustomEvent('feedback_submission', {
              rate: rating,
              review_text: reviewForSlack,
            })
          }}
          type="submit"
        >
          {translations.Feedback.submitButton}
        </button>
      </div>
    </fetcher.Form>
  )
}
