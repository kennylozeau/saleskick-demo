import { collection, query, getDocs, limit, where } from 'firebase/firestore';
import { db } from './initializeDB';

async function searchPlants(searchTerms) {
    const strLength = searchTerms.length;
    const strFrontCode = searchTerms.slice(0, strLength - 1);
    const strEndCode = searchTerms.slice(strLength - 1, strLength);

    const startCode = searchTerms;
    const endCode = strFrontCode + String.fromCharCode(strEndCode.charCodeAt(0) + 1);

    const plantsRef = collection(db, "allPlants2");

    console.log(searchTerms)
    
    const q = query(plantsRef, where('common', '>=', startCode), where('common', '<', endCode), limit(5));
    
    const allPlantsDocs = await getDocs(q);

    const allPlants = [];
    
    allPlantsDocs.forEach(doc => allPlants.push(doc.data()))

    console.log("All Searched: ", allPlants)

    return allPlants;
}


export default searchPlants;