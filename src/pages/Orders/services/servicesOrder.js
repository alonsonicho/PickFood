import { firestore } from "@src/firebase/database";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";

export const updateStatusOrder = async (orderID, status) => {
  const usersCollectionRef = collection(firestore, "orders");

  const userRef = doc(usersCollectionRef, orderID);
  const userDoc = await getDoc(userRef);

  if (userDoc.exists()) {
    const orderUpdate = {
      status: status,
    };

    await updateDoc(userDoc.ref, orderUpdate);

    return true; // Retorna true cuando la actualización es exitosa
  }

  return false; // Retorna false si no se encontró la orden
};
