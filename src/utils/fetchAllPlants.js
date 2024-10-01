import { collection, query, getDocs, limit } from 'firebase/firestore';
import { db } from './initializeDB';

async function fetchAllPlants() {
    const plantsRef = collection(db, "allPlants");
    
    const q = query(plantsRef, limit(8));
    
    const allPlantsDocs = await getDocs(q);

    const allPlants = [];
    
    allPlantsDocs.forEach(doc => allPlants.push(doc.data()))

    return allPlants;
}


export default fetchAllPlants;