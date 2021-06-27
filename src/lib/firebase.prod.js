import  Firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = { //make a new project
    apiKey: "AIzaSyChyTStVWyNv0Phywapgi95wUkF0cfFjpE",
    authDomain: "netflix-clone-1ef19.firebaseapp.com",
    databaseURL: "https://netflix-clone-1ef19-default-rtdb.firebaseio.com",
    projectId: "netflix-clone-1ef19",
    storageBucket: "netflix-clone-1ef19.appspot.com",
    messagingSenderId: "158225405068",
    appId: "1:158225405068:web:8e6a645e01f10f2a04d7a9",
    measurementId: "G-Z505HJL4XG"
  };

const firebase = Firebase.initializeApp(firebaseConfig);


//seedDatabase(firebase);

export { firebase };