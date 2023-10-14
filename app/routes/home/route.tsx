import type {LoaderFunction} from '@remix-run/node'
import {json} from '@remix-run/node'
import React from 'react'

export const loader: LoaderFunction = async () => {
  return json({locale: 'uk'})
}

const Main = () => {
  return <>home</>
}

export default Main
