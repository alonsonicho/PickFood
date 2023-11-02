import { auth } from "@src/firebase/database";
import { signInWithEmailAndPassword } from "firebase/auth";

export const authLogin = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential;
    } catch (error) {
        return error.code;
    }
}