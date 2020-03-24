import * as firebase from 'firebase'


var firebaseConfig = {
  apiKey: "AIzaSyB1CB92jb9GdeJCVq4-74La_QgrbdSV3EE",
  authDomain: "photowall-5e963.firebaseapp.com",
  databaseURL: "https://photowall-5e963.firebaseio.com",
  projectId: "photowall-5e963",
  storageBucket: "photowall-5e963.appspot.com",
  messagingSenderId: "410794667149",
  appId: "1:410794667149:web:9b44939146a5d6c1ab06c4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database()

export { database }
