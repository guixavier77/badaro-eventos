import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBUVJkPTReAeA8MXpt8ofpVtit2-jAXCLc",
  authDomain: "badaro-eventos.firebaseapp.com",
  projectId: "badaro-eventos",
  storageBucket: "badaro-eventos.appspot.com",
  messagingSenderId: "572044423257",
  appId: "1:572044423257:web:b3bef57b3ba108b7498148"
};


const app = initializeApp(firebaseConfig);

export default app;