import { firestore } from "@src/firebase/database";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";

export const updateStatusKitchen = async (orderID, status) => {
  const ordersCollectionRef = collection(firestore, "orders");
  const orderRef = doc(ordersCollectionRef, orderID);
  const orderDoc = await getDoc(orderRef);

  if (orderDoc.exists()) {
    const orderUpdate = {
      status: status,
    };
    await updateDoc(orderDoc.ref, orderUpdate);
    return true;
  }
};
