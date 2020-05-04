import Rebase from 're-base';
import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCMXjkxKqVinOC5eqjcv5UVZ1pKWdCR1lI",
    authDomain: "catch-of-the-day-shaw-react.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-shaw-react.firebaseio.com"
  });

  const base = Rebase.createClass(firebase.database());

  export {firebaseApp};

  export default base;