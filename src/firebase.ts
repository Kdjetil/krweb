import { initializeApp } from 'firebase/app'
import {getDatabase, ref} from 'firebase/database'
// ... other firebase imports

export const firebaseApp = initializeApp({
    projectId: 'Smet',
    databaseURL: 'https://smet-5e7a0-default-rtdb.firebaseio.com',
})

// used for the firestore refs
export const db = getDatabase(firebaseApp,'https://smet-5e7a0-default-rtdb.firebaseio.com/')
// here we can export reusable database references
export const nomenclaturesTableRef = ref(db, 'nomenclatures');
export const nomenclatureById = (index) => {return ref(db,'nomenclatures/'+index)}
