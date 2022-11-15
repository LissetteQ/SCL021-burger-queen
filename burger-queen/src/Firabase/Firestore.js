import { db } from "./firebase.js";
import { addDoc, collection, getDocs } from "firebase/firestore";

async function fireData(order) {
  try {
    const docRef = await addDoc(collection(db, "users"), order);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {console.log(e)}

}
//trae la base de dato de firebase a la vista de la cocina
async function traeData(){
const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  
  console.log(doc.id, " => ", doc.data());

})
return querySnapshot
};
export {fireData, traeData};