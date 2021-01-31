import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyDYC9AX8Ykkgx_RTHoD6mnKVS0v89pz3uU",
    authDomain: "clothing-db-c70fe.firebaseapp.com",
    projectId: "clothing-db-c70fe",
    storageBucket: "clothing-db-c70fe.appspot.com",
    messagingSenderId: "298926673891",
    appId: "1:298926673891:web:84572f1b0e952d82df1ad6"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig);
}else {
   firebase.app(); // if already initialized, use that one
}
  

  export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

   const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
   // console.log(snapShot)

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};



export const auth = firebase.auth();
export const firestore = firebase.firestore();


// const firestore = firebase.firebase();
// firestore.collection('user').doc('uECsmzibDv9uiIkYPvRA').collection('cartItems').doc('GKq8YdYXtQsu1YVAQzl2')
// firestore.doc('/users/uECsmzibDv9uiIkYPvRA/cartItems/GKq8YdYXtQsu1YVAQzl2')

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;