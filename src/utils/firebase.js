import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBn-mJUYvvYFdeizju4eQM_lcFRqxoI7io",
    authDomain: "lovelyhome-ecommerce.firebaseapp.com",
    projectId: "lovelyhome-ecommerce",
    storageBucket: "lovelyhome-ecommerce.appspot.com",
    messagingSenderId: "300347235668",
    appId: "1:300347235668:web:c73424cb96b629bb653cc1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
