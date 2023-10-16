import {useCallback, useState, useRef, useEffect} from 'react'

import {chunk} from '@roundforest/functional-commons'

export interface UseLoadMoreParams<Item> {
  items: Item[]
  itemsPerPage: number
}

export function useLoadMore<Item>({items, itemsPerPage}: UseLoadMoreParams<Item>) {
  const pages = useRef(chunk(items, itemsPerPage))
  const currentPageIndex = useRef(0)
  const [data, setData] = useState(pages.current[0] || [])

  const isEmpty = useCallback(() => {
    return pages.current.length === 0
  }, [])

  const hasNext = useCallback(() => {
    return pages.current[currentPageIndex.current + 1] !== undefined
  }, [currentPageIndex])

  const loadMore = useCallback(() => {
    if (isEmpty() || !hasNext()) {
      return
    }

    currentPageIndex.current++
    setData((prevData) => [...prevData, ...pages.current[currentPageIndex.current]])
  }, [hasNext, isEmpty])

  useEffect(() => {
    let newData: Item[] = []
    pages.current = chunk(items, itemsPerPage)

    if (isEmpty()) {
      setData([])
      return
    }

    if (currentPageIndex.current >= pages.current.length) {
      currentPageIndex.current = pages.current.length - 1
      newData = pages.current.flatMap((page) => page)
    } else {
      for (let i = 0; i <= currentPageIndex.current; i++) {
        newData.push(...pages.current[i])
      }
    }

    setData(newData)
  }, [isEmpty, items, itemsPerPage])

  return {
    data,
    hasNext,
    loadMore,
  }
}
