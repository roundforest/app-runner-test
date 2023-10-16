import type {LoaderFunction} from '@remix-run/node'
import {json} from '@remix-run/node'
import React from 'react'

export const loader: LoaderFunction = async () => {
  return json({locale: 'uk'})
}

const Main = () => {
  return (
    <div className="h-screen mt-24 text-center">
      <h1 className="text-5xl">HOME PAGE</h1>
      <h3 className="text-3xl mt-8">Comming soon...</h3>
    </div>
  )
}

export default Main
