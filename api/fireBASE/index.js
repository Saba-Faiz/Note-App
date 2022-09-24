import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyD7lV_dN5sbDhGf6jyb35ABrnrD2hcD99A",
  authDomain: "notes-app-5e6c6.firebaseapp.com",
  projectId: "notes-app-5e6c6",
  storageBucket: "notes-app-5e6c6.appspot.com",
  messagingSenderId: "463743892942",
  appId: "1:463743892942:web:0aad461714622a80d13f9f",
  measurementId: "G-TMLF64W3LP"
};
  
const app = initializeApp(firebaseConfig);

export default app