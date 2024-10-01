import { getDocs, doc, deleteDoc, collection, query, where, limit } from 'firebase/firestore';
import { db } from './initializeDB';

async function removePlant(plantId) {
    console.log("removing plant")

    const myPlantsRef = collection(db, "myPlants");
    
    const myPlantQuery = query(myPlantsRef, where('plantId', '==', plantId), limit(1));
    
    const myPlantDoc = await getDocs(myPlantQuery);
    console.log(myPlantDoc.docs[0].id)

    await deleteDoc(doc(db, 'myPlants', myPlantDoc.docs[0].id))
}


export default removePlant;