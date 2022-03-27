import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

initializeApp({
    credential: applicationDefault(),
    // databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
})

const DBFirestore = getFirestore();

export default DBFirestore;