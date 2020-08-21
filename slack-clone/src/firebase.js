import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDM60R4aQczO-dzytcMhuz0eRqV6gJ7ndE",
  authDomain: "slack-clone-d2ae6.firebaseapp.com",
  databaseURL: "https://slack-clone-d2ae6.firebaseio.com",
  projectId: "slack-clone-d2ae6",
  storageBucket: "slack-clone-d2ae6.appspot.com",
  messagingSenderId: "844426298283",
  appId: "1:844426298283:web:ca4c9d3dfecad1d7ee88ee",
  measurementId: "G-7MCZMDEM7N",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

/* preparations for the authentications */

const auth = firebase.auth();

/* providing the google authentication */
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
