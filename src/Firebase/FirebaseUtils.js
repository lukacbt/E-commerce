import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
    apiKey: "AIzaSyB4VMTn4aGpHN55WiyNVjBKP0usiYh4WEU",
    authDomain: "e-commerce-f669d.firebaseapp.com",
    databaseURL: "https://e-commerce-f669d.firebaseio.com",
    projectId: "e-commerce-f669d",
    storageBucket: "e-commerce-f669d.appspot.com",
    messagingSenderId: "1042616165726",
    appId: "1:1042616165726:web:da5917466aafbafbfb9bcf",
    measurementId: "G-ZXSN9DCMB8"
  }

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase