/* eslint-disable react/prop-types */
import { useDisclosure } from "@chakra-ui/react";
import CartContent from "./CartContent";
import { STATUS } from "@routes/routes";

const OrderRow = ({ order }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { orderID, tableName, status } = order;

  return (
    <>
      <div className="grid grid-cols-12 px-4 min-w-max py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-4 md:gap-x-10 ">
        <div className="col-span-3 flex items-center justify-center">
          #{orderID}
        </div>
        <div className="col-span-3 flex items-center justify-center">
          {tableName}
        </div>
        <div className="col-span-3 flex items-center justify-center">
          <span
            className={`py-1 px-3 rounded-full text-sm font-semibold ${
              status === STATUS.PENDIENTE
                ? "bg-yellow-200 text-yellow-600"
                : status === STATUS.ANULADO
                ? "bg-red-200 text-red-600"
                : "bg-green-200 text-green-600"
            }`}
          >
            {status}
          </span>
        </div>
        <div className="col-span-3 flex items-center justify-center">
          <button
            className="bg-[#282c30] hover:bg-[#3a4046] text-white font-bold py-2 px-4 rounded"
            onClick={onOpen}
          >
            Detalle
          </button>
        </div>
      </div>

      {/* Drawer */}
      <CartContent isOpen={isOpen} onClose={onClose} order={order} />
    </>
  );
};

export default OrderRow;
