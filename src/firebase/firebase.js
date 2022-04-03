import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCdawq7ldIBVAbAsrU4sz_MUEAgX66Vt-c",
  authDomain: "mi-tienda-virtual-f78f7.firebaseapp.com",
  projectId: "mi-tienda-virtual-f78f7",
  storageBucket: "mi-tienda-virtual-f78f7.appspot.com",
  messagingSenderId: "743538141075",
  appId: "1:743538141075:web:e155e37e51b0fa3f9aea66"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)