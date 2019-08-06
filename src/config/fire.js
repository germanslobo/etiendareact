import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDexfhifdSQJWYVlB8txAxyS2Dcp22NbjQ",
    authDomain: "my-new-9d39a.firebaseapp.com",
    databaseURL: "https://my-new-9d39a.firebaseio.com",
    projectId: "my-new-9d39a",
    storageBucket: "",
    messagingSenderId: "21113319231",
    appId: "1:21113319231:web:15ef5a3f3803e58d"
};

const fire = firebase.initializeApp(config);
export default fire;