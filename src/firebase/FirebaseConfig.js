// src/firebase/firebaseConfig.js
import firebase from 'firebase/app';
import 'firebase/firestore'; // Import Firestore for real-time database

// Your Firebase configuration object
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    // Add other fields if needed, such as storageBucket, messagingSenderId, appId, etc.
};

// Initialize Firebase only if it hasn't been initialized yet
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Export Firebase so you can use it throughout your project
const db = firebase.firestore(); // Create a Firestore instance
export { db };
