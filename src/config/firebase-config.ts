import firebase from 'firebase/compat/app';
const firebaseConfig = {
    apiKey: "AIzaSyDn3oZjg7x1Glge4d5v1teOas9tlzziJlw",
    authDomain: "wine-4080d.firebaseapp.com",
    projectId: "wine-4080d",
    storageBucket: "wine-4080d.appspot.com",
    messagingSenderId: "206699817827",
    appId: "1:206699817827:web:16f5765107ec0ede09c156",
    measurementId: "G-HG9DKJN8LV"
  };
  const appFire = firebase.initializeApp(firebaseConfig);
  export default appFire;