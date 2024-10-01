import { doc, getDoc } from 'firebase/firestore';
import { db } from './initializeDB';

async function fetchPlant(plantId) {
    console.log("fetching plant")

    const plantsRef = doc(db, "allPlants", plantId);
    
    const plantDoc = await getDoc(plantsRef);

    return plantDoc.data();
}


export default fetchPlant;