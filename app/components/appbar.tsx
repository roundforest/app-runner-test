import {Form, Link} from '@remix-run/react'
import {textToSlug} from '@roundforest/text-transforms-commons'
import React, {Fragment, useState} from 'react'
import {useReportWidgetClickCallback, useReportWidgetSeen} from '~/hooks/analytics-hooks'
import {BdtIconClose} from '~/icons/bdt-icon-close'
import {BdtIconAppLogoOldstack} from '~/icons/bdt-icon-logo-oldstack'
import {BdtIconSearch} from '~/icons/bdt-icon-search'
import {useTranslation} from '~/localization/translation'

const Appbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [mobileSearch, setMobileSearch] = useState(true)
  const [searchText, setSearchText] = useState('')
  const translation = useTranslation()
  const [desktopSearchRef] = useReportWidgetSeen({
    name: 'search-desktop',
    placement: 'top',
  })
  const [mobileSearchRef] = useReportWidgetSeen({
    name: 'search-mobile',
    placement: 'top',
  })
  const [desktopMenuRef] = useReportWidgetSeen({
    name: 'categories-menu-desktop',
    placement: 'top',
  })
  const [mobileMenuRef] = useReportWidgetSeen({
    name: 'categories-menu-mobile',
    placement: 'top',
  })

  const sendWidgetClickEvent = useReportWidgetClickCallback()

  return (
    <header className="contents">
      <nav className="sticky top-0 z-40">
        <div className="mx-auto flex items-center justify-between bg-zinc-800">
          <BdtIconAppLogoOldstack className="z-50" />
          <Form
            ref={desktopSearchRef}
            className="z-50 mx-auto flex min-w-1/2 justify-center tablet:hidden"
            method="POST"
            reloadDocument
            action={`products/${searchText}`}
            role="search"
            onSubmit={() => {
              sendWidgetClickEvent({
                name: 'search-desktop',
                placement: 'top',
                clickElement: 'cta-button',
                variation: JSON.stringify({value: textToSlug(searchText)}),
              })
            }}
          >
            <input
              type="text"
              aria-label="Search input"
              name="search-query"
              className="w-full p-1 pl-3 text-neutral-500 outline-none placeholder:text-sm"
              placeholder={translation.AppBarSearch.inputPlaceholder}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              required
            />
            <button
              className="bg-red-500 px-5 text-sm font-normal uppercase not-italic text-white"
              aria-label="desktop search button"
              type="submit"
            >
              {translation.AppBarSearch.ctaText}
            </button>
          </Form>

          <button
            className="ml-auto mr-5 hidden tablet:block"
            aria-label="mobile search button"
            onClick={() => {
              sendWidgetClickEvent({
                name: 'search-mobile',
                placement: 'top',
                clickElement: 'close-button',
              })
              setMobileSearch(!mobileSearch)
            }}
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
            onClick={() => {
              setMobileMenu(!mobileMenu)
            }}
          >
            <span className="block h-0.5 w-full bg-white"></span>
            <span className="block h-0.5 w-full bg-white"></span>
            <span className="block h-0.5 w-full bg-white"></span>
          </button>
        </div>

        <nav
          ref={desktopMenuRef}
          className="grid grid-flow-col w-full h-10 bg-white gap-8 auto-cols-auto px-2 drop-shadow-md tablet:hidden"
        >
          {translation.AppBarMenuDesktop.menuItems.map(({title, href}, i) => (
            <Fragment key={`${title}-${i}`}>
              <Link
                reloadDocument
                onClick={() => {
                  sendWidgetClickEvent({
                    name: 'categories-menu-desktop',
                    placement: 'top',
                    clickElement: 'name',
                    variation: title,
                  })
                }}
                to={href}
                className="after:transition after:scale-0 after:duration-300 after:ease-in-out hover:text-[#61c200] text-[#333333] hover:after:scale-90 text-sm font-normal h-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full relative after:h-0.5 after:bg-[#61c200] flex items-center justify-center"
                aria-label={`explore ${title} category`}
              >
                {title}
              </Link>
            </Fragment>
          ))}
        </nav>

        <Form
          ref={mobileSearchRef}
          method="POST"
          action={`products/${searchText}`}
          reloadDocument
          role="search"
          onSubmit={() => {
            sendWidgetClickEvent({
              name: 'search-mobile',
              placement: 'top',
              clickElement: 'cta-button',
              variation: JSON.stringify({value: textToSlug(searchText)}),
            })
          }}
          className={
            mobileSearch
              ? 'tablet:translate-y-0 sticky -z-50 hidden w-full bg-zinc-800 px-5 pb-2 transition-transform tablet:top-0 tablet:block'
              : 'tablet:translate-y-[-50px] sticky -z-50 hidden w-full bg-zinc-800 px-5 pb-2 transition-transform tablet:top-0 tablet:block'
          }
        >
          <input
            type="text"
            aria-label="Search input mobile"
            name="search-query"
            className="w-full p-1 pl-3 text-neutral-500 outline-none placeholder:text-sm"
            placeholder={translation.AppBarSearch.inputPlaceholder}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            required
          />
        </Form>
      </nav>

      <div
        id="sidebar-mobile-menu"
        className={
          mobileMenu
            ? 'tablet:translate-x-0 fixed left-0 top-0 z-50 h-screen w-full -translate-x-[-100%] flex-col bg-white p-8 transition-transform'
            : 'fixed left-0 top-0 z-50 h-screen w-full -translate-x-[-100%] flex-col bg-white p-8 transition-transform'
        }
        aria-label="Sidebar"
      >
        <div className="mt-5 flex justify-between">
          <h4 className="text-sm font-semibold uppercase">{translation.MobileMenu.title}</h4>
          <button
            type="button"
            aria-label="close menu"
            onClick={() => {
              sendWidgetClickEvent({
                name: 'categories-menu-mobile',
                placement: 'top',
                clickElement: 'close-button',
              })
              setMobileMenu(false)
            }}
          >
            <BdtIconClose className="h-5 w-5" />
          </button>
        </div>
        <nav ref={mobileMenuRef} className="mt-16 flex flex-col justify-between gap-9 text-center">
          {translation.AppBarMenuMobile.menuItems.map(({title, href}, i) => (
            <Fragment key={`${title}-${i}`}>
              <Link
                onClick={() => {
                  sendWidgetClickEvent({
                    name: 'categories-menu-mobile',
                    placement: 'top',
                    clickElement: 'name',
                    variation: title,
                  })
                  setMobileMenu(false)
                }}
                to={href}
                className="text-sm font-light"
                aria-label={`explore ${title} category`}
              >
                {title}
              </Link>
            </Fragment>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Appbar
