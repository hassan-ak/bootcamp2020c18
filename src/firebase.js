import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB2XxS1pcYHXol1sy0eEx5l95MJTBNJLmk",
    authDomain: "bootcamp2020c18-604d0.firebaseapp.com",
    databaseURL: "https://bootcamp2020c18-604d0.firebaseio.com",
    projectId: "bootcamp2020c18-604d0",
    storageBucket: "bootcamp2020c18-604d0.appspot.com",
    messagingSenderId: "303815085378",
    appId: "1:303815085378:web:8ed0dc35c38290e9978cdb"
}

firebase.initializeApp(config)

export default firebase;