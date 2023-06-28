import { initializeApp } from "firebase/app";
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAM-BJ8JvcYWnzGEp9dNmpPnb2JCIdqud0",
  authDomain: "jchat-6f612.firebaseapp.com",
  projectId: "jchat-6f612",
  storageBucket: "jchat-6f612.appspot.com",
  messagingSenderId: "87727387679",
  appId: "1:87727387679:web:a84df838f3450daeb1912a",
  measurementId: "G-VQ5MJBPWY3"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
