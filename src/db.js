import firebase from "firebase/compat/app";
import "firebase/compat/database"

const config = {
  apiKey: "AIzaSyCSROgkj5OgqNMYSmFfjjRvl0egAkRwp4c",
  authDomain: "fir-chatapp-b04b9.firebaseapp.com",
  databaseURL: "https://fir-chatapp-b04b9-default-rtdb.firebaseio.com",
  projectId: "fir-chatapp-b04b9",
  storageBucket: "fir-chatapp-b04b9.appspot.com",
  messagingSenderId: "381190491416",
  appId: "1:381190491416:web:02dd64e5f05321af99226d",
};

const db = firebase.initializeApp(config);
export default db;


