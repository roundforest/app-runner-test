import {Form} from '@remix-run/react'
import React, {Fragment} from 'react'
import {BdtIconAppLogoOldstack} from '~/icons/bdt-icon-logo-oldstack'
import appBarMenuItems from '~/utils/app-bar-menu-items'

const Appbar = () => {
  return (
    <header className="contents">
      <nav className="border-gray-200 bg-[#333333] sticky top-0 z-50">
        <div className="flex items-center justify-between mx-auto ">
          <BdtIconAppLogoOldstack />
          <Form
            className="flex justify-center mx-auto tablet:hidden min-w-[50%]"
            method="post"
            action="/"
            reloadDocument
          >
            <input
              type="text"
              aria-label="Search-input"
              name="search-query"
              className="w-full p-1 outline-none placeholder:text-sm pl-3 text-[#7b7b7b]"
              placeholder="Search deals"
              defaultValue=""
            />
            <button
              className="bg-red-500 uppercase text-white not-italic font-normal text-sm px-5"
              aria-label="Search-button"
              type="submit"
            >
              Search
            </button>
          </Form>

          <button
            className="hidden tablet:flex flex-col justify-between w-6 h-4 cursor-pointer bg-transparent mr-3"
            aria-label="open-mobile-menu"
          >
            <span className="block w-full h-0.5 bg-white"></span>
            <span className="block w-full h-0.5 bg-white"></span>
            <span className="block w-full h-0.5 bg-white"></span>
          </button>
        </div>
        <div className="flex flex-row w-full justify-between px-20 py-2 tablet:hidden sticky top-12 z-50 bg-white drop-shadow-md">
          {appBarMenuItems.map(({title, href}, i) => (
            <Fragment key={`${title}-${i}`}>
              <a href={`/${href}`} className="font-light text-sm" aria-label="categories">
                {title}
              </a>
            </Fragment>
          ))}
          <a href="/categories" className="font-light text-sm" aria-label="categories">
            See All
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Appbar
