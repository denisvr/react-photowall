import * as firebase from 'firebase'

//Your configuration
var firebaseConfig = {
  
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database()

export { database }
