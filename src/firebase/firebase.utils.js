import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCnKfa8BkE12Wws9TIHtnpMyRIvquLTEMg",
    authDomain: "shop-here-db.firebaseapp.com",
    databaseURL: "https://shop-here-db.firebaseio.com",
    projectId: "shop-here-db",
    storageBucket: "shop-here-db.appspot.com",
    messagingSenderId: "891886732880",
    appId: "1:891886732880:web:78137b2fffd0c1417cb355",
    measurementId: "G-Y6RMHC7NRW"
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const siginInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;