import firebase from "firebase/app";
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDjqK7YfMbJXGb861GcccHTxZrRAvg3ntk",
    authDomain: "tofushop-1997d.firebaseapp.com",
    projectId: "tofushop-1997d",
    storageBucket: "tofushop-1997d.appspot.com",
    messagingSenderId: "290967708633",
    appId: "1:290967708633:web:104884e38d8941bafbefc8",
    measurementId: "G-M3WD8CNMSF"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()

export { projectFirestore }