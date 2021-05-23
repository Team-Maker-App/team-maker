import firebase from "firebase";

const config = {
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app();
}
firebase.analytics();

export const getUserByUID = (uid) => {
  return new Promise((resolve, reject) => {
    firebase
      .firestore()
      .collection("users")
      .where("uid", "==", uid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          resolve(doc.data());
        });
      })
      .catch((error) => reject(error));
  });
};

export const subscribeMatchByID = (id) => {
  return new Promise((resolve, reject) => {
    firebase
      .firestore()
      .collection("matches")
      .doc(id)
      .onSnapshot(
        (doc) => {
          resolve(doc.data());
        },
        (error) => {
          reject(error);
        }
      );
  });
};

export const signIn = (email, password) => {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((credential) => {
        console.log("🚀 ~ .then ~ credential", credential);
        resolve(credential.user);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const createUser = (email, password) => {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((credential) => {
        console.log("🚀 ~ create User ~ .then ~ credential", credential)
        resolve(credential.user);
      })
      .catch((error) => {
        console.log("🚀 ~ create User error ~ returnnewPromise ~ error", error)
        reject(error)
      })
  })
}
