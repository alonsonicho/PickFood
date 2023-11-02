import { firestore } from "@src/firebase/database";
import { setKitchen } from "@store/states/kitchen";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { getTable } from "./getTable";

const listenToKitchenOrders = () => {
  return (dispatch) => {
    const orderCollection = collection(firestore, "orders");

    // Calcula el inicio y el final del día actual en milisegundos
    const inicioDelDia = new Date().setHours(0, 0, 0, 0);
    const finDelDia = new Date().setHours(23, 59, 59, 999);

    // Realiza la consulta para obtener las órdenes del día actual con status "Confirmado"
    const q = query(
      orderCollection,
      where("orderDate", ">=", inicioDelDia),
      where("orderDate", "<=", finDelDia),
      where("status", "==", "Recepcionado"),
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
        dispatch(setKitchen(resolvedOrders));
      });
    });

    return () => {
      unsubscribe();
    };
  };
};

export default listenToKitchenOrders;
