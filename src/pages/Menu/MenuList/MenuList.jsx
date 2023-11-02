import ReactPaginate from 'react-paginate'
import MenuItem from './components/MenuItem'
import usePagination from '@shared/usePagination'
import useMenus from './hooks/useMenus'

const MenuList = () => {
  
  const { dataMenus } = useMenus();
  const { displayData, pageCount, changePage, pageRange } = usePagination(dataMenus, 5)

  return (
    <>
      <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {displayData?.map((menu, index) => (
        <MenuItem key={index} menu={menu} />
      ))}
      </div>
      <ReactPaginate
        previousLabel={'Anterior'}
        nextLabel={'Siguiente'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName='w-full h-10 flex justify-center items-center mt-10 gap-4'
        previousLinkClassName={'px-3 py-1 border border-[#282c30] rounded-md'}
        nextLinkClassName={'px-3 py-1 border border-[#282c30] rounded-md'}
        disabledClassName={'paginationDisabled'}
        pageLinkClassName={'px-3 py-1 hover:text-white border border-[#282c30] rounded-md hover:bg-[#3a4046] transition-colors'}
        activeLinkClassName='bg-[#282c30] text-white'
        breakLabel={'.....'}
        marginPagesDisplayed={1} // Número de botones de página que se mostrarán al principio y al final
        pageRangeDisplayed={2} // Número de botones de página que se mostrarán antes y después de la página actual
        pageRange={pageRange} // Array que contiene los números de página que deseas mostrar
      />
    </>
  )
}

export default MenuList
