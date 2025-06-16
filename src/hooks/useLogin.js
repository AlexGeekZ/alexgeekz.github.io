import { db, auth, googleProvider } from "../databases/firebase";
import { signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { useUserContext } from "../context/userContext";
import { useUiContext } from "../context/uiContext";

const useLogin = () => {
  const { setAdminDb } = useUserContext();
  const { setActive } = useUiContext();

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(async () => {
        const userRef = doc(db, "users", email);
        const userFirestore = await getDoc(userRef);
        if (userFirestore.exists()) {
          const logins = await userFirestore.data().logins;
          await updateDoc(userRef, {
            lastLogin: new Date().getTime(),
            logins: logins + 1,
          });
          Swal.fire("Bienvenido a AlexGeekDev", "Ahora puedes navegar como usuario registrado", "success");
        }
      })
      .catch((error) => {
        Swal.fire("Error", `${error.message}`, "error");
      });
  };

  const googleLogin = async () => {
    signInWithPopup(auth, googleProvider)
      .then(async ({ user }) => {
        const userRef = doc(db, "users", user.email);
        const userFirestore = await getDoc(userRef);
        if (userFirestore.exists()) {
          const logins = await userFirestore.data().logins;
          await updateDoc(userRef, {
            lastLogin: new Date().getTime(),
            logins: logins + 1,
          });
          setActive(true);
          Swal.fire("Bienvenido a AlexGeekDev", "Ahora puedes navegar como usuario registrado", "success");
        } else {
          await setDoc(userRef, {
            available: false,
            date: new Date().getTime(),
            email: user.email,
            isAnonymous: user.isAnonymous,
            lastLogOut: new Date().getTime(),
            lastLogin: new Date().getTime(),
            logins: 1,
            name: user.displayName,
            nickname: "",
            photo: user.photoURL,
            provider: "Google",
            role: "User",
            uid: user.uid,
            verified: user.emailVerified,
          });
          setActive(true);
          Swal.fire("Bienvenido a AlexGeekDev", "Ahora puedes navegar como usuario registrado", "success");
        }
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire("Error", `${errorMessage} Code: ${errorCode}`, "error");
      });
  };

  return { login, googleLogin };
};

export default useLogin;
