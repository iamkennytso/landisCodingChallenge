// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get, set, push, remove} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzVg8_gHjsIYWPlJ-sPE6go8H-UYdSjqA",
  authDomain: "landiscodingchallenge.firebaseapp.com",
  databaseURL: "https://landiscodingchallenge-default-rtdb.firebaseio.com",
  projectId: "landiscodingchallenge",
  storageBucket: "landiscodingchallenge.appspot.com",
  messagingSenderId: "407907586882",
  appId: "1:407907586882:web:7c751f6fadd9cb8936aedb",
  measurementId: "G-TRGW3R95PV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const dbRef = ref(db);

export const getInitialData = async () => {
  const snapshot = await get(child(dbRef, 'data'))
  return snapshot.val()
}

export const addNewClient = (data) => {
  const clientRef = ref(db, 'data');
  const newClientRef = push(clientRef);
  set(newClientRef, data);
}

export const deleteClient = id => {
  const deleteClientRef = ref(db, `data/${id}`);
  remove(deleteClientRef)
}

export const editClient = (data, id) => {
  set(ref(db, `data/${id}`), data);
}