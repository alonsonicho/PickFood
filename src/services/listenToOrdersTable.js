import { firestore } from "@src/firebase/database";
import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { getTable } from "./getTable";
import { setOrdersTable } from "@store/states/ordersTable";

const listenToOrdersTable = () => {
  return (dispatch) => {
    const orderCollection = collection(firestore, "orders");

    // Calcula el inicio y el final del día actual en milisegundos
    const inicioDelDia = new Date().setHours(0, 0, 0, 0);
    const finDelDia = new Date().setHours(23, 59, 59, 999);

    // Realiza la consulta para obtener las órdenes del día actual
    const q = query(
      orderCollection,
      where("orderDate", ">=", inicioDelDia),
      where("orderDate", "<=", finDelDia),
      where("status", "in", ["Recepcionado", "Finalizado cocina"]),
      orderBy("orderDate", "desc")
    );

    const unsubscribe = onSnapshot(q, async (snapshot) => {
      const updatedOrders = snapshot.docs.map(async (document) => {
        const data = document.data();
        const tableId = data.tableId;
        const tableName = await getTable(tableId);
        if (document.exists) {
          return { ...data, tableName };
        } else {
          return data;
        }
      });

      Promise.all(updatedOrders).then((resolvedOrders) => {
        dispatch(setOrdersTable(resolvedOrders));
      });
    });
    return () => {
      unsubscribe();
    };
  };
};

export default listenToOrdersTable;
