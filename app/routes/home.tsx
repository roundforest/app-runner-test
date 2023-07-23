import type {LoaderFunction} from '@remix-run/node'
import {json} from '@remix-run/node'
import React from 'react'

export const loader: LoaderFunction = async () => {
  return json({})
}

const Main = () => {
  return <div>Home Page</div>
}

export default Main
