import { signOut } from "firebase/auth";
import { auth } from "../databases/firebase";
import Swal from "sweetalert2";
import { useUserContext, useUiContext } from "../context";

const useLogout = () => {
  const { setUserDb } = useUserContext();
  const { setActive } = useUiContext();
  const logout = () => {
    signOut(auth)
      .then(() => {
        setUserDb();
        setActive(false);
        Swal.fire("Hasta luego", "Esperamos regreses pronto", "success");
      })
      .catch((error) => {
        Swal.fire("Error", `${error.message}`, "error");
      });
  };
  return { logout };
};

export default useLogout;
