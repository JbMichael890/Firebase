import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const app = initializeApp({
  apiKey: "AIzaSyBB0YqsmcckkZh1G1BfO3JdKEg2rhhHA60",
  authDomain: "first-project-bfa44.firebaseapp.com",
  projectId: "first-project-bfa44",
  storageBucket: "first-project-bfa44.appspot.com",
  messagingSenderId: "913745296451",
  appId: "1:913745296451:web:85d6a450a43f561c0ce8f6",
});

const db = getFirestore(app);
export { db };
