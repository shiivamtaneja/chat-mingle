import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"


const firebaseConfig = {
    apiKey: `{process.env.REACT_APP_FIREBASE_API}`,
    authDomain: `{REACT_APP_AUTH_DOMAIN}`,
    projectId: `{REACT_APP_PROJECT_ID}`,
    storageBucket: `{REACT_APP_STORAGE_BUCKET}`,
    messagingSenderId: `{REACT_APP_MESSIGIN_SENDER_ID}`,
    appId: `{REACT_APP_APP_ID}`,
    measurementId: `{REACT_APP_MEASUREMENT_ID}`
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
