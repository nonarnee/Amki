// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAnalytics } from 'firebase/analytics';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB6bPoqkor2VMa2iNo_bq265FqSIJe6o0c',
  authDomain: 'amki-40aa3.firebaseapp.com',
  projectId: 'amki-40aa3',
  storageBucket: 'amki-40aa3.appspot.com',
  messagingSenderId: '30081292186',
  appId: '1:30081292186:web:badf9ea658df670d774c23',
  measurementId: 'G-43XBBQFPB2',
  databaseURL: 'https://amki-40aa3-default-rtdb.asia-southeast1.firebasedatabase.app/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics
const analytics = getAnalytics(app);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
