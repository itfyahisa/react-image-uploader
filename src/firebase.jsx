// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDaZTOmFzkSu3PbOlRMSSVosRceTxO9as8",
    authDomain: "image-uploader-34bc8.firebaseapp.com",
    projectId: "image-uploader-34bc8",
    storageBucket: "image-uploader-34bc8.appspot.com",
    messagingSenderId: "902464520356",
    appId: "1:902464520356:web:581d612839bf2f1453a631"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app)

export default storage