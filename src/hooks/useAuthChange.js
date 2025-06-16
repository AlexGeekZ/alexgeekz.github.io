import { auth, db } from "../databases/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { useUiContext, useUserContext } from "../context/";

const useAuthChange = () => {
  const { setUserDb } = useUserContext();
  const { setActive } = useUiContext();

  const getAuth = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userRef = doc(db, "users", user.email);
        onSnapshot(userRef, async (doc) => {
          if (doc.exists()) {
            await setUserDb(doc.data());
            await setActive(true);
          }
        });
      } else {
        // setActive(false);
      }
    });
  };

  return { getAuth };
};

export default useAuthChange;
