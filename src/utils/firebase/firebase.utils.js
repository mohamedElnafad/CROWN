import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_o6jpSIk71WVzFDU8KtLSTcjn4yzu-vE",
  authDomain: "crwon-clothing-db-22370.firebaseapp.com",
  projectId: "crwon-clothing-db-22370",
  storageBucket: "crwon-clothing-db-22370.appspot.com",
  messagingSenderId: "386830655595",
  appId: "1:386830655595:web:b0de3d4db5817d46e4512e",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createCollectionAndDocument = async (
  collectionName,
  collectionToAdd
) => {
  const collectionRef = collection(db, collectionName);
  const batch = writeBatch(db);

  collectionToAdd.forEach((element) => {
    const collectioDocRef = doc(collectionRef, element.title.toLowerCase());
    batch.set(collectioDocRef, element);
  });
  await batch.commit();
  console.log("Done!");
};

export const getCollectionAndDocument = async (collectionName) => {
  const collectionRef = collection(db, collectionName);
  const q = query(collectionRef);
  const dataSnapshot = await getDocs(q);
  console.log(dataSnapshot);
  const CategoryData = dataSnapshot.docs.reduce((acc, dataItem) => {
    const { title, items } = dataItem.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {}); //initiate the data with {}

  return CategoryData;
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedLister = (callback) => {
  onAuthStateChanged(auth, callback);
};
