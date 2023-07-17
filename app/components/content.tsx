import React, {Fragment, useRef} from 'react'
import {Form, useLoaderData, useSubmit} from '@remix-run/react'
import {getProductsByFilters} from '../utils/products-filter'
import currencyFormatter from '~/utils/currency-formatter'
import {BdtIconShipping} from '~/icons/bdt-icon-free-shipping'
import DesktopFilter from './desktop-filter'
import {useTranslation} from '~/localization/translation'
import SortDropdown from './sort-dropdown'

import type {LoaderDataProps} from '~/models'
import {getSortedProducts} from '~/utils/products-sort'

const Content = () => {
  const mRef = useRef<HTMLDivElement>(null)

  const {
    data: {products, metadata},
    filterBy,
    sortBy,
  } = useLoaderData<LoaderDataProps>()
  const translation = useTranslation()
  const submit = useSubmit()
  const filteredProducts = getProductsByFilters(products.slice(0, 35), filterBy)
  const sortedProducts = getSortedProducts(filteredProducts, sortBy)

  const handleOnChange = (e: any) => {
    submit(e.target.form)
  }

  return (
    <Form method="get" className="flex flex-row">
      <DesktopFilter handleOnChange={handleOnChange} />
      <div className="h-full w-full px-6" ref={mRef}>
        <div className="mb-4 mt-4 flex flex-col justify-center tablet:mt-0">
          <div className="overflow-visible">
            <div className="mt-5 flex flex-col gap-4 ">
              <div className="ml-[-4px] flex flex-row text-[13px] leading-normal text-gray-500">
                {metadata.breadcrumbs.map((crump, i) => (
                  <a
                    key={i}
                    className='capitalize after:content-["/"] last:after:content-[""]'
                    aria-label={`go to ${crump.title} category`}
                    href={crump.path}
                  >
                    &nbsp;&nbsp;{`${crump.title}`}
                    &nbsp;&nbsp;
                  </a>
                ))}
              </div>
              <div className="flex flex-row">
                <div className="flex flex-row gap-5 tablet:flex-col tablet:gap-3 mobile:pr-0">
                  <span className="text-2xl capitalize">
                    {translation.PageTitleDeals(metadata.query)}
                    &nbsp;{translation.PageTitleLocale}
                  </span>
                  <span className="flex items-center text-base font-light leading-none text-[#686868]">
                    {sortedProducts.length} deals found
                  </span>
                </div>
                <SortDropdown />
              </div>
              <div className="sm:hidden border-b-[1px]" />
              <span className="text-[13px] font-light mobile:hidden">{metadata?.queryInfoTop}</span>
            </div>
          </div>
          <div className="mt-9 grid gap-5 xl-desktop:grid-cols-4 desktop:grid-cols-3 tablet:grid-cols-3 mobile:grid-cols-2">
            {sortedProducts.slice(0, 10).map((p, i) => (
              <Fragment key={`${p.title}-${i}`}>
                <a
                  aria-label="product card"
                  href={p.redirectLinkTo}
                  rel="noreferrer"
                  target="_blank"
                  className=" relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-sm bg-white drop-shadow-md"
                >
                  <div className="pb-8">
                    {p.merchantLogo && (
                      <img
                        className="absolute right-3 top-3 h-5 w-14 object-scale-down mobile:hidden"
                        src={p.merchantLogo}
                        alt={p.title}
                      />
                    )}
                  </div>
                  {p.discount && (
                    <div className="whitespace-no-wrap absolute left-[-12px] top-16 flex h-8 w-32 origin-left rotate-[-45deg] items-center justify-center bg-red-500 text-white">
                      {Math.ceil(p.discount)}% OFF
                    </div>
                  )}
                  <div className="mx-auto flex h-32 w-32 items-center justify-center p-3">
                    <img className="mx-auto h-32 w-32 object-fill" src={p.image} alt={p.title} />
                  </div>
                  <div className="h-32 p-3">
                    <div className="whitespace-no-wrap ... block w-full overflow-hidden text-ellipsis text-center">
                      <span className="line-clamp-1">{p.title}</span>
                    </div>
                    <div className="mb-2 text-center capitalize">
                      <span>{p.condition}</span>
                    </div>
                    <div className="mx-[-30px] border-b-[1px]" />

                    <div className="mt-6 text-center text-red-500 line-through">
                      {p.oldPrice && <span>{currencyFormatter.format(p.oldPrice)}</span>}
                    </div>
                  </div>
                  <div className="flex flex-row justify-center tablet:hidden">
                    <BdtIconShipping fill="#595959" />
                    <span className="text-[15px] font-normal uppercase text-[#595959]">
                      Free shipping
                    </span>
                  </div>
                  <div className="hidden flex-row justify-center mobile:flex">
                    {p.merchantLogo && (
                      <img
                        className="h-5 w-14 object-scale-down"
                        src={p.merchantLogo}
                        alt={p.title}
                      />
                    )}
                  </div>
                  <div>
                    <div className="p-3">
                      <button
                        className=" sm:text-sm w-full bg-[#61c200] p-0 px-4 py-2 font-normal uppercase text-white hover:bg-[#52a102]"
                        aria-label="go to product page"
                      >
                        View Deal
                      </button>
                    </div>
                  </div>
                </a>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </Form>
  )
}

export default Content
