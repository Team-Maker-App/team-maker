import app from "./firebase";
import { getFirestore, collection, getDocs, doc, getDoc } from "firebase/firestore";

const db = getFirestore(app);

export const getMatches = async () => {
  const matches = collection(db, "matches");
  const matchesSnapshot = await getDocs(matches);
  const matchesList = matchesSnapshot.docs.map((doc) => doc.data());
  return matchesList;
};

export const getMatchById = async (id) => {
  const docRef = doc(db, "matches", id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};
