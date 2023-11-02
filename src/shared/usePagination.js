import { useState } from 'react'

function usePagination(data, productsPerPage = 1) {
  const [pageNumber, setPageNumber] = useState(0)

  const pagesVisited = pageNumber * productsPerPage
  const displayData = data.slice(pagesVisited, pagesVisited + productsPerPage)

  const pageCount = Math.ceil(data.length / productsPerPage)

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  const pagesToShow = 2
  const pageRange = []
  for (let i = Math.max(1, pageNumber - pagesToShow); i <= Math.min(pageCount, pageNumber + pagesToShow); i++) {
    pageRange.push(i)
  }

  return {
    displayData,
    pageCount,
    changePage,
    pageRange
  }
}

export default usePagination
