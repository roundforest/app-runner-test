import React from 'react'
import {BdtIconAppLogoFooter} from '~/icons/bdt-icon-logo-footer'
import navigation from '../utils/footer-navigation'

const Footer = () => {
  return (
    <footer className="bg-zinc-800 px-[24px]">
      <div className="mx-auto max-w-[1400px] py-[40px] text-white">
        <div className="flex items-start justify-between text-left tablet:flex-col tablet:items-center tablet:justify-center tablet:text-center">
          <a href="/" className="mt-5 tablet:mb-10" aria-label="go to home page">
            <BdtIconAppLogoFooter width={104} height={62} />
          </a>
          {navigation.map((item, i) => (
            <div key={`${item}-${i}`} className="p-5">
              <h4 className="mb-4 font-bold uppercase text-white">{item.title}</h4>
              <ul>
                {item.menuItems.map((menuItem, index) => (
                  <li key={`${menuItem}-${index}`}>
                    <a
                      href={menuItem.href}
                      className="my-2 block text-sm font-light text-white"
                      aria-label={`explore ${menuItem.title} menu`}
                    >
                      {menuItem.title}
                    </a>
                  </li>
                ))}
                {item.title === 'Categories' && (
                  <li key={item.menuItems.length}>
                    <a href="/categories" aria-label="explore all categories">
                      See All
                    </a>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-6 border-t-[0.01em] border-solid border-gray-400 pt-6 text-center text-[12px] tablet:items-center">
          <div className="flex flex-row justify-between tablet:flex-col-reverse">
            <div className="">
              Amazon, Amazon Prime, the Amazon logo and Amazon Prime logo are trademarks of
              Amazon.com, Inc. or its affiliates
            </div>
            <div className="mb-2 justify-between">
              Bestdeals.today&nbsp;© {new Date().getFullYear()} All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
