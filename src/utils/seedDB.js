import { db } from './initializeDB.js';
import {collection, doc, setDoc} from 'firebase/firestore';
import { allPlants } from '../../data/plants.js';

// This function is run once to seed the database with plant data
async function seedDatabase() {
    const plantsRef = collection(db, "allPlants2")

    for(let i = 0; i < allPlants.length; i++) {
        let plant = allPlants[i];
        await setDoc(doc(plantsRef, plant.id), {...plant, 'common': plant['Common name'][0]});
    }
}

seedDatabase();