import { useEffect, useState } from "react";
import { collection, getDocs, limit, orderBy, query, startAfter } from "@firebase/firestore";
import { db } from "../databases/firebase";

export const useFetchAwards = () => {
  const [awards, setAwards] = useState([]);
  const [last, setLast] = useState();
  const [disable, setDisable] = useState(false);
  const [totalAwards, setTotalAwards] = useState();

  useEffect(() => {
    getAwards();
  }, []);

  const getAwards = async () => {
    const first = query(collection(db, "awards"), orderBy("date", "desc"), limit(12));
    let total = query(collection(db, "awards"));
    const totalSnap = await (await getDocs(total)).docs;
    setTotalAwards(totalSnap.length);
    const documentSnapshots = await getDocs(first);
    let arrayAwards = [];

    documentSnapshots.forEach((doc) => {
      arrayAwards.push(doc.data());
    });

    setAwards(arrayAwards);
    setLast(documentSnapshots.docs[documentSnapshots.docs.length - 1]);
  };

  const getNext = async () => {
    const next = query(collection(db, "awards"), orderBy("date", "desc"), startAfter(last), limit(12));
    const documentSnapshots = await getDocs(next);
    let arrayAwards = awards;
    if (documentSnapshots.docs.length < 12) {
      setDisable(true);
    }

    documentSnapshots.forEach((doc) => {
      arrayAwards.push(doc.data());
    });

    setAwards(arrayAwards);
    setLast(documentSnapshots.docs[documentSnapshots.docs.length - 1]);
  };

  return { awards, getNext, disable, getAwards, totalAwards };
};
