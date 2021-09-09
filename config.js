import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 apiKey: "AIzaSyDQIZc3SIBq5D9nmqJa8VZHmOYe3JZnY-Y",
 authDomain: "pro-c-71.firebaseapp.com",
 projectId: "pro-c-71",
 storageBucket: "pro-c-71.appspot.com",
 messagingSenderId: "583212112931",
 appId: "1:583212112931:web:ac277f922ebb919324a596",
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();

