import React, {useState} from 'react'
import Rating from './rating'
import {Review} from './review'
import type {FeedbackState} from '~/models'
import {ThankYouPopup} from './thank-you-popup'

export const FeedbackMain = () => {
  const [feedbackState, setFeedbackState] = useState<FeedbackState>({
    step: 'rate',
    rating: undefined,
    review: undefined,
    email: undefined,
    error: undefined,
  })

  const onClose = (error?: string) => {
    setFeedbackState({
      ...feedbackState,
      step: 'hide',
      error,
      rating: undefined,
      review: undefined,
    })
  }

  const Feedback = () => {
    switch (feedbackState.step) {
      case 'rate':
        return (
          <Rating
            rating={feedbackState.rating || 0}
            setRating={(newRating: number) => setFeedbackState({...feedbackState, step: 'review', rating: newRating})}
            onClose={onClose}
          />
        )
      case 'review':
        return (
          <Review
            isPositive={!!feedbackState.rating && feedbackState.rating > 3}
            review={feedbackState.review}
            rating={feedbackState.rating || 0}
            nextStep={() => setFeedbackState({...feedbackState, step: 'thank-dailog'})}
            onClose={onClose}
          />
        )
      case 'thank-dailog':
        return <ThankYouPopup onClose={onClose} />
      default:
        return null
    }
  }

  return <Feedback />
}
