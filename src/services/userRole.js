import { firestore } from "@src/firebase/database";
import { collection, doc, getDoc } from "firebase/firestore";

export const getRole = async (uid) => {
  const sellerUID = "b3ouAZt8VPU8JXAd9cQ3nHdxbgr1";
  const sellerRef = doc(firestore, "sellers", sellerUID);
  const employeeRef = doc(collection(sellerRef, "employees"), uid);
  const employeeSnapShot = await getDoc(employeeRef);
  
  return employeeSnapShot.exists() ? employeeSnapShot.data().role : null;
};
