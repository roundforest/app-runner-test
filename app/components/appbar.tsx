import {Form, Link} from '@remix-run/react'
import React, {Fragment, useState} from 'react'
import {BdtIconClose} from '~/icons/bdt-icon-close'
import {BdtIconAppLogoOldstack} from '~/icons/bdt-icon-logo-oldstack'
import {BdtIconSearch} from '~/icons/bdt-icon-search'
import {useTranslation} from '~/localization/translation'
import appBarMenuItems from '~/utils/app-bar-menu-items'

const mobileMenuClassName = {
  open: 'tablet:translate-x-0',
  close: '',
}
const mobileSearchClassName = {
  open: 'tablet:translate-y-0',
  close: 'tablet:translate-y-[-50px]',
}

const Appbar = () => {
  const [mobileMenu, setMobileMenu] = useState<'open' | 'close'>('close')
  const [mobileSearch, setMobileSearch] = useState<'open' | 'close'>('open')
  const translation = useTranslation()

  return (
    <header className="contents">
      <nav className="sticky top-0 z-40">
        <div className="mx-auto flex items-center justify-between bg-zinc-800">
          <BdtIconAppLogoOldstack className="z-50" />
          <Form
            className="z-50 mx-auto flex min-w-1/2 justify-center tablet:hidden"
            method="post"
            action="/search"
            reloadDocument
          >
            <input
              type="text"
              aria-label="Search input"
              name="search-query"
              className="w-full p-1 pl-3 text-neutral-500 outline-none placeholder:text-sm"
              placeholder="Search deals"
              defaultValue=""
              required
            />
            <button
              className="bg-red-500 px-5 text-sm font-normal uppercase not-italic text-white"
              aria-label="desktop search button"
              type="submit"
            >
              Search
            </button>
          </Form>

          <button
            className="ml-auto mr-5 hidden tablet:block"
            aria-label="mobile search button"
            onClick={() =>
              mobileSearch === 'close' ? setMobileSearch('open') : setMobileSearch('close')
            }
          >
            <BdtIconSearch fill="white" />
          </button>
          <button
            className="mr-3 hidden h-4 w-6 cursor-pointer flex-col justify-between bg-transparent tablet:flex"
            data-drawer-target="sidebar-mobile-menu"
            data-drawer-toggle="sidebar-mobile-menu"
            aria-controls="sidebar-mobile-menu"
            type="button"
            aria-label="open mobile menu"
            onClick={() =>
              mobileMenu === 'close' ? setMobileMenu('open') : setMobileMenu('close')
            }
          >
            <span className="block h-0.5 w-full bg-white"></span>
            <span className="block h-0.5 w-full bg-white"></span>
            <span className="block h-0.5 w-full bg-white"></span>
          </button>
        </div>

        <div className="top-12 -z-50 flex w-full flex-row justify-between bg-white px-20 py-2 drop-shadow-md tablet:hidden">
          {appBarMenuItems.map(({title, href}, i) => (
            <Fragment key={`${title}-${i}`}>
              <Link
                to={`/products${href}`}
                className="text-sm font-light"
                aria-label={`explore ${title} category`}
              >
                {title}
              </Link>
            </Fragment>
          ))}
          <a href="/categories" className="text-sm font-light" aria-label="explore all categories">
            See All
          </a>
        </div>
        <Form
          method="post"
          action="/search"
          reloadDocument
          className={`${mobileSearchClassName[mobileSearch]} sticky -z-50 hidden w-full bg-zinc-800 px-5 pb-2 transition-transform tablet:top-0 tablet:block`}
        >
          <input
            type="text"
            aria-label="Search input mobile"
            name="search-query"
            className="w-full p-1 pl-3 text-neutral-500 outline-none placeholder:text-sm"
            placeholder="Search deals"
            defaultValue=""
            required
          />
        </Form>
      </nav>

      <div
        id="sidebar-mobile-menu"
        className={`${mobileMenuClassName[mobileMenu]} fixed left-0 top-0 z-50 h-screen w-full -translate-x-[-100%] flex-col bg-white p-8 transition-transform`}
        aria-label="Sidebar"
      >
        <div className="mt-5 flex justify-between">
          <h4 className="text-sm font-semibold uppercase">{translation.MobileMenu.title}</h4>
          <button type="button" aria-label="close menu" onClick={() => setMobileMenu('close')}>
            <BdtIconClose className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-16 flex flex-col justify-between gap-9 text-center">
          {appBarMenuItems.map(({title, href}, i) => (
            <Fragment key={`${title}-${i}`}>
              <Link
                onClick={() => setMobileMenu('close')}
                to={`/products${href}`}
                className="text-sm font-light"
                aria-label={`explore ${title} category`}
              >
                {title}
              </Link>
            </Fragment>
          ))}
          <a href="/categories" className="text-sm font-light" aria-label="explore all categories">
            See All
          </a>
        </div>
      </div>
    </header>
  )
}

export default Appbar
