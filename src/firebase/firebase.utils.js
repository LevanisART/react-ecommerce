import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC3bHvGlLmS4LHVEpvxnyf3IfTu8yXyvgA",
  authDomain: "react-ecommerce-7a654.firebaseapp.com",
  databaseURL: "https://react-ecommerce-7a654.firebaseio.com",
  projectId: "react-ecommerce-7a654",
  storageBucket: "react-ecommerce-7a654.appspot.com",
  messagingSenderId: "291935781883",
  appId: "1:291935781883:web:c512b6da4c5267af1c015e",
  measurementId: "G-HJV8YGCEC9"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

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

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
