import React from 'react'
import {BdtIconAppLogoFooter} from '~/icons/bdt-icon-logo-footer'
import navigation from '../utils/footer-navigation'

const Footer = () => {
  return (
    <footer className="px-[24px] bg-[#333333]">
      <div className="max-w-[1400px] py-[40px] mx-auto text-white">
        <div className="tablet:text-center tablet:items-center tablet:flex-col tablet:justify-center flex items-start justify-between text-left">
          <a href="/" className="mt-5 tablet:mb-10">
            <BdtIconAppLogoFooter width={104} height={62} />
          </a>
          {navigation.map((item, i) => (
            <div key={`${item}-${i}`} className="p-5">
              <h4 className="mb-4 text-white font-bold uppercase">{item.title}</h4>
              <ul>
                {item.menuItems.map((menuItem, index) => (
                  <React.Fragment key={`${menuItem}-${index}`}>
                    <a href={menuItem.href} className="block text-white font-light my-2 text-sm">
                      {menuItem.title}
                    </a>
                  </React.Fragment>
                ))}
                {item.title === 'Categories' && (
                  <React.Fragment key={item.menuItems.length}>
                    <a href="/categories">See All</a>
                  </React.Fragment>
                )}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-6 pt-6 border-t-[0.01em] border-solid border-gray-400 tablet:items-center text-center text-[12px]">
          <div className="flex tablet:flex-col-reverse flex-row justify-between">
            <div className="">
              Amazon, Amazon Prime, the Amazon logo and Amazon Prime logo are trademarks of
              Amazon.com, Inc. or its affiliates
            </div>
            <div className="justify-between mb-2">
              Bestdeals.today&nbsp;© {new Date().getFullYear()} All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
