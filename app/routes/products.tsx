import type {ActionArgs} from '@remix-run/node'
import {json, redirect} from '@remix-run/node'
import {Outlet, useLoaderData} from '@remix-run/react'
import {ldClient} from '~/utils/launch-darkly.server'

export async function action({request}: ActionArgs) {
  const body = await request.formData()
  const query = body.get('search-query')
  return redirect(`/products/${query}`)
}

export const loader = async () => {
  const launchDarkly = await ldClient?.waitForInitialization()
  const featureFlag = await launchDarkly?.allFlagsState({key: ''})

  return json({ff: featureFlag?.getFlagValue('remix-app-test')})
}

export default function Products() {
  // const {ff} = useLoaderData()
  // const env = process.env.NODE_ENV === 'production' ? 'prod' : 'test'
  return (
    // <div className="p-10">
    //   <span>Feature flag {env} environment : </span>
    //   <span className="text-xl">"{ff}"</span>
    //   <Outlet />
    // </div>
    <Outlet />
  )
}
