import React, {Fragment} from 'react'
import {useActionData, useLoaderData} from '@remix-run/react'
import {getProductsByFilters} from '../utils/products-filter'
import currencyFormatter from '~/utils/currency-formatter'
import {BdtIconShipping} from '~/icons/bdt-icon-free-shipping'
import type {ProductsAndMetadataResponse} from '@roundforest/bdt-client'
import DesktopFilter from './desktop-filter'

const Content = () => {
  const {products, metadata} = useLoaderData<ProductsAndMetadataResponse>()
  const data = useActionData()
  const filteredProducts = getProductsByFilters(products.slice(0, 35), data?.filters)

  return (
    <div className="flex flex-row">
      <DesktopFilter />
      <div className="w-full h-full px-6">
        <div className="flex flex-col justify-center mt-4 mb-4">
          <div className="overflow-visible">
            <div className="flex flex-col gap-4 mt-5">
              <div className="flex flex-row text-[13px] leading-normal text-gray-400 ml-[-4px]">
                {metadata.breadcrumbs.map((crump, i) => (
                  <a
                    key={i}
                    className='after:content-["/"] last:after:content-[""] capitalize'
                    href={crump.path}
                  >
                    &nbsp;&nbsp;{`${crump.title}`}&nbsp;&nbsp;
                  </a>
                ))}
              </div>
              <div className="flex flex-row">
                <div className="flex flex-row gap-5 sm:gap-3 sm:flex-col pr-9 mobile:pr-0">
                  <p className="text-2xl capitalize">
                    Best {metadata.query} deals in the united states
                  </p>
                  <span className="flex leading-none text-base font-light text-[#686868] items-center">
                    {filteredProducts.length} deals found
                  </span>
                </div>
                <div className="ml-auto"></div>
              </div>
              <div className="border-b-[1px] sm:hidden" />
              <span className="text-[13px] font-light mobile:hidden">{metadata?.queryInfoTop}</span>
            </div>
          </div>
          <div className="grid mobile:grid-cols-2 tablet:grid-cols-3 desktop:grid-cols-3 xl-desktop:grid-cols-4 gap-5 mt-9">
            {filteredProducts.map((p, i) => (
              <Fragment key={`${p.title}-${i}`}>
                <a
                  aria-label="product-card"
                  href={p.redirectLinkTo}
                  rel="noreferrer"
                  target="_blank"
                  className=" flex overflow-hidden relative flex-col justify-between rounded-sm cursor-pointer drop-shadow-md bg-white"
                >
                  <div className="pb-8">
                    {p.merchantLogo && (
                      <img
                        className="h-5 absolute right-3 top-3 mobile:hidden"
                        src={p.merchantLogo}
                        alt={p.title}
                      />
                    )}
                  </div>
                  {p.discount && (
                    <div className="absolute top-16 left-[-12px] flex rotate-[-45deg] items-center justify-center w-32 h-8 origin-left whitespace-no-wrap bg-red-500 text-white">
                      {Math.ceil(p.discount)}% OFF
                    </div>
                  )}
                  <div className="p-3 flex justify-center items-center h-32 w-32 mx-auto">
                    <img
                      className="mx-auto object-scale-down h-32 w-32"
                      src={p.image}
                      alt={p.title}
                    />
                  </div>
                  <div className="h-32 p-3">
                    <div className="text-center block overflow-hidden whitespace-no-wrap w-full text-ellipsis ...">
                      <span className="line-clamp-1">{p.title}</span>
                    </div>
                    <div className="text-center capitalize mb-2">
                      <span>{p.condition}</span>
                    </div>
                    <div className="border-b-[1px] mx-[-30px]" />

                    <div className="line-through text-center text-red-500 mt-6">
                      {p.oldPrice && <span>{currencyFormatter.format(p.oldPrice)}</span>}
                    </div>
                  </div>
                  <div className="flex flex-row justify-center tablet:hidden">
                    <BdtIconShipping fill="#595959" />
                    <span className="text-[#595959] text-[15px] font-normal uppercase">
                      Free shipping
                    </span>
                  </div>
                  <div className="mobile:flex flex-row justify-center hidden">
                    {p.merchantLogo && <img className="h-5" src={p.merchantLogo} alt={p.title} />}
                  </div>
                  <div>
                    <div className="p-3">
                      <button
                        className=" p-0 bg-[#61c200] hover:bg-[#52a102] uppercase text-white font-normal sm:text-sm py-2 px-4 w-full"
                        aria-label="product-cta"
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
    </div>
  )
}

export default Content
