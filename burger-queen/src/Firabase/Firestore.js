import { db } from "./firebase.js";
import { addDoc, collection } from "firebase/firestore";

async function fireData(order) {
  try {
    const docRef = await addDoc(collection(db, "users"), order);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {console.log(e)}

}
export {fireData};