import { initializeApp } from 'firebase/app'
import firebaseConfig from './firebaseConfig'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const app = initializeApp(firebaseConfig)
export const firestore = getFirestore(app);
export const auth = getAuth();