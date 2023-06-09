import React from 'react'
import type {LoaderFunction} from '@remix-run/node'
import {json, redirect} from '@remix-run/node'

export const loader: LoaderFunction = async () => {
  return redirect('/products/laptops')
}

const Main = () => {
  return <div>Main</div> // Just for redirect
}

export default Main
