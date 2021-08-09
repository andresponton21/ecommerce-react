import firebase from 'firebase/app'
import 'firebase/firestore'



// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDBBV64IdR4ACznr7c-Rdj1gFBLO5KX08E",
    authDomain: "e-commerce-3f36d.firebaseapp.com",
    projectId: "e-commerce-3f36d",
    storageBucket: "e-commerce-3f36d.appspot.com",
    messagingSenderId: "893464781472",
    appId: "1:893464781472:web:1b4ecc8540e29d304cdfc5"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)



export default firebase
