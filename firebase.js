import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
        apiKey: "AIzaSyCeu67ShDQZUhAwJGbrJVF92UXcRYWgGzA",
        authDomain: "petty-island-99a58.firebaseapp.com",
        databaseURL: "https://petty-island-99a58-default-rtdb.firebaseio.com",
        projectId: "petty-island-99a58",
        storageBucket: "petty-island-99a58.appspot.com",
        messagingSenderId: "504792261884",
        appId: "1:504792261884:web:7faf849ea78d1dd7572379",
        measurementId: "G-68PVMQL7K1"
      };

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };




// import firebase from 'firebase/compat/app'
// import "firebase/compat/firestore";
// import "firebase/compat/auth";



// const firebaseConfig = {
//         apiKey: "AIzaSyCeu67ShDQZUhAwJGbrJVF92UXcRYWgGzA",
//         authDomain: "petty-island-99a58.firebaseapp.com",
//         databaseURL: "https://petty-island-99a58-default-rtdb.firebaseio.com",
//         projectId: "petty-island-99a58",
//         storageBucket: "petty-island-99a58.appspot.com",
//         messagingSenderId: "504792261884",
//         appId: "1:504792261884:web:7faf849ea78d1dd7572379",
//         measurementId: "G-68PVMQL7K1"
//       };


// if(!firebase.apps.length){
//         firebase.initializeApp(firebaseConfig)
// }

// export default firebase;






// // // Import the functions you need from the SDKs you need
// // import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// // // TODO: Add SDKs for Firebase products that you want to use
// // // https://firebase.google.com/docs/web/setup#available-libraries

// // // Your web app's Firebase configuration
// // // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// // const firebaseConfig = {
// //   apiKey: "AIzaSyCeu67ShDQZUhAwJGbrJVF92UXcRYWgGzA",
// //   authDomain: "petty-island-99a58.firebaseapp.com",
// //   projectId: "petty-island-99a58",
// //   storageBucket: "petty-island-99a58.appspot.com",
// //   messagingSenderId: "504792261884",
// //   appId: "1:504792261884:web:7faf849ea78d1dd7572379",
// //   measurementId: "G-68PVMQL7K1"
// // };

// // // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);