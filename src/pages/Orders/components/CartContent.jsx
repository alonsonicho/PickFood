/* eslint-disable react/prop-types */
import { useToast } from "@chakra-ui/react";
import { formatDate } from "@helpers/helpers";
import { updateStatusOrder } from "../services/servicesOrder";
import { STATUS } from "@routes/routes";
import DrawerComponent from "@components/DrawerComponent";
import Swal from "sweetalert2";

const CartContent = ({ isOpen, onClose, order }) => {
  const toast = useToast();
  const { orderID, orderDate, itemsOrder, status, tableName, total } = order;
  const formattedDate = formatDate(orderDate);

  const handleAcceptOrder = async () => {
    Swal.fire({
      title: `¿Aceptar la orden #${orderID}?`,
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        updateStatusOrder(orderID, STATUS.RECEPCIONADO);
        toast({
          title: `Orden #${orderID} aceptada`,
          description: "La orden ha sido aceptada correctamente",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    })
    .catch((error) => {
      console.error(error)
      toast({
        title: `Orden #${orderID} no aceptada`,
        description: "La orden no ha sido aceptada correctamente",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    });
    onClose();
  };

  const handleCancelOrder = () => {
    Swal.fire({
      title: `¿Anular la orden #${orderID}?`,
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        updateStatusOrder(orderID, STATUS.ANULADO);
        toast({
          title: `Orden #${orderID} anulada`,
          description: "La orden ha sido anulada correctamente",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    }).catch((error) => {
      console.error(error)
      toast({
        title: `Orden #${orderID} no anulada`,
        description: "La orden no ha sido anulada correctamente",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    });
    onClose();
  };

  return (
    <DrawerComponent
      title={"Detalle del pedido"}
      onClose={onClose}
      isOpen={isOpen}
    >
      <div className="text-lg flex flex-col h-full pb-10">
        <div className="flex flex-col gap-5 border-b-2 border-gray-300 mb-5 pb-5">
          <span className="font-bold">Orden #{orderID}</span>
          <span className="font-semibold">Fecha : {formattedDate}</span>
          <span className="font-semibold">N° de mesa : {tableName}</span>
          <span className="font-semibold">Estado de la orden : {status}</span>
        </div>
        <div className="flex-1">
          {itemsOrder?.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 p-2 flex rounded-md gap-4 text-base"
            >
              <img src={item.thumbnailUrl} className="w-20 h-20" />
              <div className="flex-1 flex-col">
                <p className="font-semibold">
                  Producto : <span className="font-normal">{item.title}</span>
                </p>
                <p className="font-semibold">
                  Cantidad :{" "}
                  <span className="font-normal">{item.quantity}</span>
                </p>
                <p className="font-semibold">
                  Notas :{" "}
                  <span className="font-normal">{item.longDescription}</span>
                </p>
                <p className="font-semibold">
                  Precio : <span className="font-normal">S/{item.price}</span>
                </p>
              </div>
              <span className="font-semibold">Subtotal: {item.priceTotal}</span>
            </div>
          ))}
        </div>
        <div className="border-t-2 border-gray-300 mt-5">
          <span className="font-bold mt-5">Total : S/{total}</span>
        </div>
        <div className="flex justify-evenly mt-5 text-white font-semibold">
          {(status === STATUS.PENDIENTE || status === STATUS.ANULADO) && (
            <button
              className="bg-green-600 rounded-md px-3 py-2 hover:bg-green-500 transition-colors"
              onClick={handleAcceptOrder}
            >
              Aceptar orden
            </button>
          )}
          {order.status !== STATUS.ANULADO && (
            <button
              className="bg-red-600 rounded-md px-3 py-2 hover:bg-red-500"
              onClick={handleCancelOrder}
            >
              Anular orden
            </button>
          )}
        </div>
      </div>
    </DrawerComponent>
  );
};

export default CartContent;
