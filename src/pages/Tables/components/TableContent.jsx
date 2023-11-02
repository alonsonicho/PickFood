/* eslint-disable react/prop-types */
import DrawerComponent from "@components/DrawerComponent";

const TableContent = ({ isOpen, onClose, order }) => {

  const tableName = order[0]?.tableName;

  return (
    <DrawerComponent
      title={"Detalle del pedido"}
      onClose={onClose}
      isOpen={isOpen}
    >
      <div className="text-lg flex flex-col h-full pb-10">
        <div className="flex flex-col gap-5 border-b-2 border-gray-300 mb-5 pb-5">
          <span className="font-semibold">N° de mesa : {tableName}</span>
        </div>
        <div className="flex-1">
          {order.map((item, index) => (
            <div key={index} className="mb-4">
              <span className="font-semibold">Orden #{item.orderID}</span>
              {item.itemsOrder.map((item, index) => (
                <div
                key={index}
                className="border border-gray-300 p-2 flex rounded-md gap-4 text-base"
              >
                <img src={item.thumbnailUrl} className="w-20 h-20" />
                <div className="flex-1 flex-col">
                  <p className="font-semibold">Producto : <span className="font-normal">{item.title}</span></p>
                  <p className="font-semibold">Cantidad : <span className="font-normal">{item.quantity}</span></p>
                  <p className="font-semibold">Notas : <span className="font-normal">{item.longDescription}</span></p>
                  <p className="font-semibold">Precio : <span className="font-normal">S/{item.price}</span></p>
                </div>
                <span className="font-semibold">Subtotal: {item.priceTotal}</span>
              </div>
              ))}
            </div>
          ))}
        </div>
        <div className="border-t-2 border-gray-300 mt-5">
        </div>
      </div>
    </DrawerComponent>
  )
}

export default TableContent
