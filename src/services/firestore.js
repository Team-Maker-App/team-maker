import app from "./firebase";
import { getFirestore, collection, getDocs, getDoc, doc, onSnapshot } from "firebase/firestore";

const db = getFirestore(app);

// One-time database petitions

export const getMatches = async () => {
  const matches = collection(db, "matches");
  const matchesSnapshot = await getDocs(matches);
  const matchesList = matchesSnapshot.docs.map((doc) => doc.data());
  return matchesList;
};

// Real-time database subscriptions

export const subscribeByMatchId = async (id, callback) => {
  const docRef = doc(db, "matches", id);
  const docSnap = await getDoc(docRef);

  onSnapshot(docRef, (doc) => {
    const data = doc.data();
    callback(data);
  });

  return docSnap.exists();
};
