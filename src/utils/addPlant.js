import { addDoc, collection } from 'firebase/firestore';
import { db } from './initializeDB';

async function addPlant(plantId) {
    console.log("adding plant")

    await addDoc(collection(db, 'myPlants'), {plantId})
}


export default addPlant;