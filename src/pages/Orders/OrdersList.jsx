import OrderRow from "./components/OrderRow"
import useOrdersList from "./hooks/useOrdersList"

const OrdersList = () => {
  const { dataOrdersList } = useOrdersList()

  return (
    <>
      <div className='container'>
        <div className='sm:flex sm:items-center'>
          <div className='sm:flex-auto'>
            <h3 className='text-3xl font-semibold mb-2'>
              Lista de ordenes
            </h3>
            <div className='border-b-2 border-black mt-4 w-16'></div>
          </div>
        </div>
        <div className='mt-8 flex flex-col'>
          <div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8'>
            <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
              <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg'>
                <div className="px-4 mx-auto lg:px-6 overflow-x-auto">
                  <div className="w-full overflow-x-auto bg-gray-100 mt-10">
                    <div className="sm:min-w-full text-center">
                      <div className="grid grid-cols-12 p-4 min-w-max text-sm font-medium text-gray-900 bg-gray-200 border-t border-b border-gray-200 gap-x-4 md:gap-x-10 ">
                        <div className="col-span-3 flex items-center justify-center ">#Orden</div>
                        <div className="col-span-3 flex items-center justify-center">#Mesa</div>
                        <div className="col-span-3 flex items-center justify-center">Estado</div>
                        <div className="col-span-3 flex items-center justify-center">Detalle</div>
                      </div>
                      {dataOrdersList.map((order, index) => (
                        <OrderRow key={index} order={order} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrdersList
