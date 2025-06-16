import { useEffect, useState } from "react";
import { collection, getDocs, limit, orderBy, query, startAfter } from "@firebase/firestore";
import { db } from "../databases/firebase";

export const useFetchProjects = () => {
  const [projects, setProjects] = useState([]);
  const [last, setLast] = useState();
  const [disable, setDisable] = useState(false);
  const [totalProjects, setTotalProjects] = useState();

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    const first = query(collection(db, "projects"), orderBy("date", "desc"), limit(12));
    let total = query(collection(db, "projects"));
    const totalSnap = await (await getDocs(total)).docs;
    setTotalProjects(totalSnap.length);
    const documentSnapshots = await getDocs(first);
    let arrayProjects = [];

    documentSnapshots.forEach((doc) => {
      arrayProjects.push(doc.data());
    });

    setProjects(arrayProjects);
    setLast(documentSnapshots.docs[documentSnapshots.docs.length - 1]);
  };

  const getNext = async () => {
    const next = query(collection(db, "projects"), orderBy("date", "desc"), startAfter(last), limit(12));
    const documentSnapshots = await getDocs(next);
    let arrayProjects = projects;
    if (documentSnapshots.docs.length < 12) {
      setDisable(true);
    }

    documentSnapshots.forEach((doc) => {
      arrayProjects.push(doc.data());
    });

    setProjects(arrayProjects);
    setLast(documentSnapshots.docs[documentSnapshots.docs.length - 1]);
  };

  return { projects, getNext, disable, getProjects, totalProjects };
};
