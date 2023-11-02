import { useState } from "react";
import useTablesAndOrders from "./hooks/useTablesAndOrders";
import { useDisclosure, useToast } from "@chakra-ui/react";
import TableContent from "./components/TableContent";
import { STATUS } from "@routes/routes";
import tableImage from "@assets/table.svg";

const Tables = () => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { dataTables, dataOrdes } = useTablesAndOrders();
  const [orderState, setOrderState] = useState([]);

  const handleSeeInfo = (orderForTable) => {
    if(orderForTable && orderForTable.length > 0){
      setOrderState(orderForTable);
      onOpen();
    } else {
      toast({
        title: `La mesa se encuentra libre`,
        description: "La mesa no tiene ordenes asignadas",
        status: "error",
        duration: 1500,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <div className="container mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 items-center justify-center">
        {dataTables?.map((table, index) => {
          const orderForTable = dataOrdes.filter((order) => order.tableId === table.tableID)

          const tableStatus =
          (orderForTable.some((order) =>
            [STATUS.RECEPCIONADO, STATUS.FINALIZADO_COCINA].includes(order.status)
          ))
            ? "Ocupado"
            : "Libre";

          return (
            <div
              key={index}
              onClick={() => handleSeeInfo(orderForTable)}
              className={`${
                tableStatus === "Libre" ? "bg-amber-400" : "bg-green-300"
              } flex flex-col  w-60 h-60 rounded-md shadow-black shadow-md mx-auto cursor-pointer`}
            >
              <img src={tableImage} alt="table" className="" />
              <div className="flex-1">
                <div className="flex flex-col h-full items-center justify-center text-lg font-semibold">
                  <span>{table.title}</span>
                  <span>Capacidad : {table.capacity}</span>
                  <span>Estado : {tableStatus}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Drawer */}
      <TableContent isOpen={isOpen} onClose={onClose} order={orderState} />
    </>
  );
};

export default Tables;
