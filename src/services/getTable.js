import { firestore } from "@src/firebase/database";
import { collection, doc, getDoc } from "firebase/firestore";

export const getTable = async (uid) => {
    const sellerUID = "b3ouAZt8VPU8JXAd9cQ3nHdxbgr1";
    const sellerRef = doc(firestore, "sellers", sellerUID);
    const employeeRef = doc(collection(sellerRef, "tables"), uid);
    const employeeSnapShot = await getDoc(employeeRef);
    
    return employeeSnapShot.exists() ? employeeSnapShot.data().title : null;
  };
