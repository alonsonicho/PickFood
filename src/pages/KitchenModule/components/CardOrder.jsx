/* eslint-disable react/prop-types */
import { useToast } from "@chakra-ui/react";
import { updateStatusKitchen } from "../service/serviceKitchen";
import { STATUS } from "@routes/routes";
import Swal from "sweetalert2";

const CardOrder = ({ order }) => {
  const toast = useToast(); 
  const { orderID, tableName, itemsOrder } = order;

  const handleUpdateKitchen = async () => {
    Swal.fire({
      title: `¿Finalizar orden #${orderID} en cocina?`,
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        updateStatusKitchen(orderID, STATUS.FINALIZADO_COCINA);
        toast({
          title: `Orden #${orderID} finalizado`,
          description: "La orden ha sido finalizada correctamente",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    }).catch((error) => {
      console.error(error)
      toast({
        title: `Orden #${orderID} no culminada`,
        description: "La orden no ha sido aceptada correctamente",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    });
  }

  return (
    <div className="w-full h-auto">
      <div className="flex items-center justify-between bg-red-700 text-white rounded-t-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          className="iconify iconify--emojione hidden lg:block ml-2 lg:ml-8"
          viewBox="0 0 64 64"
        >
          <path
            fill="#94989b"
            d="M6.1 3.1C4.4 4.9.9 16.2 15.6 31c4.7 4.7 8.2 1.2 11.1 4.2L53 61.5s5.7-1.9 6.6-6.7L7.5 2.6s-.5-.4-1.4.5"
          ></path>
          <path
            fill="#b2c1c0"
            d="M61.8 11c.7-1.3-.9-.9-.9-.9s-10.6 10.2-12.1 9c-1.5-1.2 10.4-11 9-12.9-1.3-1.7-11.7 10.5-13 9-1.2-1.5 8.9-12.1 8.9-12.1s.4-1.6-.9-.9c-16 8.6-18 16.6-18 16.6s-.6 1.6.6 2.8c.1.1-29.2 29.3-33.1 33.2-1.9 1.9 5.1 8.8 7 6.9 3.9-3.9 33-33.3 33.1-33.2 1.2 1.2 2.8.7 2.8.7s8-2.1 16.6-18.2"
          ></path>
        </svg>
        <div className="flex flex-1 flex-col flex-wrap justify-evenly items-center gap-x-5 lg:flex-row p-2">
          <div className="flex flex-col text-center font-semibold">
            <p>Orden #{orderID}</p>
            <p>{tableName}</p>
          </div>
          <div className="m-2 flex flex-col items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="none"
              viewBox="0 0 24 24"
              className="cursor-pointer bg-white rounded-full transition-colors hover:bg-green-300"
              onClick={() => handleUpdateKitchen(orderID)}
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="#1C274C"
                strokeWidth="1.5"
                opacity="0.5"
              ></circle>
              <path
                stroke="#1C274C"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M8.5 12.5l2 2 5-5"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-gray-200">
        {itemsOrder.map((item, index) => (
          <div
            key={index}
            className="flex gap-x-2 lg:gap-x-10 items-center border border-gray-300 px-1 py-1"
          >
            <img src={item.thumbnailUrl} alt="" className="w-20 h-16" />
            <div className="font-normal text-sm">
              <p className="font-semibold">{item.title}</p>
              <p>Cantidad : {item.quantity}</p>
              <p>Notas : {item.longDescription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardOrder;
