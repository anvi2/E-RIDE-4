import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDHzdIiD458wpg58yjqdITdB4jzpGwfSLw",
    authDomain: "e-ride-fe2d1.firebaseapp.com",
    projectId: "e-ride-fe2d1",
    storageBucket: "e-ride-fe2d1.appspot.com",
    messagingSenderId: "833003909651",
    appId: "1:833003909651:web:0a3a23087917c2623d45e6"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();