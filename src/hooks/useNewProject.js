import { doc, setDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { useUserContext, useUiContext } from "../context";
import { db } from "../databases/firebase";
import useUploadImage from "./useUploadImage";

export const useNewProject = () => {
  const { userDb } = useUserContext();
  const { uploadUrl, percent, state } = useUploadImage();
  const { setLoading } = useUiContext();

  const newProject = async (values, path, nameDb, projectNick) => {
    const projectRef = doc(db, "projects", projectNick);

    const project = {
      body: values.body,
      company: values.company,
      date: new Date().getTime(),
      id: projectRef.id,
      link: values.link,
      nickname: values.nickname,
      title: values.title,
      userName: userDb.name,
      userPhoto: userDb.photo,
      userRole: userDb.role,
      userUid: userDb.uid,
    };

    await setDoc(projectRef, project)
      .then(async () => {
        await uploadUrl(path, values.photo, nameDb, projectNick);
        setLoading(false);
        Swal.fire("Congrats!", "Your project has been added!", "success");
      })
      .catch(function (error) {
        Swal.fire("Error!", `${error}`, "error");
        setLoading(false);
      });
  };

  return { newProject };
};
