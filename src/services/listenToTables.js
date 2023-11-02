import { firestore } from "@src/firebase/database";
import { setTables } from "@store/states/tables";
import { collection, doc, onSnapshot } from "firebase/firestore";

const listenToTables = () => {
    return async (dispatch) => {
        const sellerUID = "b3ouAZt8VPU8JXAd9cQ3nHdxbgr1";

        const sellersRef = doc(firestore, 'sellers', sellerUID);
        const tablesCollectionRef = collection(sellersRef, 'tables');

        const unsubscribe = onSnapshot(tablesCollectionRef, (snapshot) => {
            const tablesData = [];
            snapshot.forEach((doc) => {
                const data = doc.data();
                delete data.publishedDate;
                tablesData.push(data);
            });

            dispatch(setTables(tablesData));
        });

        return () => {
            unsubscribe();
        }
    }
}

export default listenToTables