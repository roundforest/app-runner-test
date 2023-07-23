import React from 'react'
import {BdtIconAppLogoFooter} from '~/icons/bdt-icon-logo-footer'

const navigation = [
  {
    title: 'General',
    menuItems: [
      {
        title: 'Home',
        href: '/',
      },
      {
        title: 'Privacy',
        href: '/privacy',
      },
      {
        title: 'Terms & Conditions',
        href: '/terms',
      },
      {title: 'Contact Us', href: '/contact-us'},
    ],
  },
  {
    title: 'Popular searches',
    menuItems: [
      {
        title: 'Oculus Quest 2',
        href: '/oculus-quest-2',
      },
      {
        title: 'Airpod Pro',
        href: '/airpod-pro',
      },
      {
        title: 'Ember Wave',
        href: '/ember-wave',
      },
      {
        title: 'Dyson Airwrap Complete',
        href: '/dyson-airwrap-complete',
      },
      {
        title: 'Uniden R7',
        href: '/uniden-r-7',
      },
      {
        title: 'Nintendo Switch',
        href: '/nintendo-switch',
      },
      {
        title: 'Laptop',
        href: '/laptop',
      },
    ],
  },
  {
    title: 'Categories',
    menuItems: [
      {
        title: 'Electronics',
        href: '/electronics',
      },
      {
        title: 'Appliances',
        href: '/appliances',
      },
      {
        title: 'Automotive',
        href: '/automotive',
      },
      {
        title: 'Software',
        href: '/software',
      },
      {
        title: 'Home & Kitchen',
        href: '/home-kitchen',
      },
    ],
  },
  {
    title: 'International sites',
    menuItems: [
      {
        title: 'France',
        href: '//fr.bestdeals.today',
      },
      {
        title: 'Australia',
        href: '//au.bestdeals.today',
      },
      {
        title: 'Spain',
        href: '//es.bestdeals.today',
      },
      {
        title: 'Japan',
        href: '//jp.bestdeals.today',
      },
      {
        title: 'Italy',
        href: '//it.bestdeals.today',
      },
      {
        title: 'Germany',
        href: '//de.bestdeals.today',
      },
      {
        title: 'Canada',
        href: '//ca.bestdeals.today',
      },
      {
        title: 'Singapore',
        href: '//sg.bestdeals.today',
      },
      {
        title: 'United Kingdom',
        href: '//uk.bestdeals.today',
      },
      {
        title: 'Mexico',
        href: '//mx.bestdeals.today',
      },
      {
        title: 'India',
        href: '//in.bestdeals.today',
      },
    ],
  },
]

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
