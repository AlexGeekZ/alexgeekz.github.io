import { collection, doc, setDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { useUserContext, useUiContext } from "../context";
import { db } from "../databases/firebase";
import useUploadImage from "./useUploadImage";

export const useNewAward = () => {
  const { userDb } = useUserContext();
  const { uploadUrl, percent, state } = useUploadImage();
  const { setLoading } = useUiContext();

  const newAward = async (values, path, nameDb) => {
    const awardRef = doc(collection(db, "awards"));

    const newAward = {
      id: awardRef.id,
      title: values.title,
      body: values.body,
      link: values.link,
      date: new Date().getTime(),
      userName: userDb.name,
      userPhoto: userDb.photo,
      userUid: userDb.uid,
      userRole: userDb.role,
      provider: values.provider,
      category: values.category,
    };

    await setDoc(awardRef, newAward)
      .then(async () => {
        await uploadUrl(path, values.photo, nameDb, awardRef.id);
        setLoading(false);
        Swal.fire("Congrats!", "Your award has been added!", "success");
      })
      .catch(function (error) {
        Swal.fire("Error!", `${error}`, "error");
        setLoading(false);
      });
  };

  return { newAward };
};
