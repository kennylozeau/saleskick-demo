import { collection, query, getDocs, limit, where } from 'firebase/firestore';
import { db } from './initializeDB.js';

// import { myPlants } from '../stores.js';

async function fetchMyPlants() {
    const myPlantsRef = collection(db, "myPlants");
    const allPlantsRef = collection(db, "allPlants");
    
    const myPlantsQuery = query(myPlantsRef);
    
    const myPlantsDocs = await getDocs(myPlantsQuery);

    let myPlants = [];
    
    myPlantsDocs.forEach(doc => myPlants.push(doc.data().plantId))

    console.log(myPlants)

    const allPlantsQuery = query(allPlantsRef, where('id', 'in', myPlants))

    const allMyPlantsDocs = await getDocs(allPlantsQuery);

    myPlants = [];

    allMyPlantsDocs.forEach(doc => myPlants.push(doc.data()))

    console.log(myPlants)

    return myPlants;
}

export default fetchMyPlants;