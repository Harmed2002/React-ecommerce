// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";  // Permite trabajar con ls BD de Firestore

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDbOuSckNiAzZhh9ubEip012MPClsxvJl0",
	authDomain: "ecommerce43250.firebaseapp.com",
	projectId: "ecommerce43250",
	storageBucket: "ecommerce43250.appspot.com",
	messagingSenderId: "628854473184",
	appId: "1:628854473184:web:598c1917e9ca1b5697eb85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
