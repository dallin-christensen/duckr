import firebase from 'firebase'


const config = {
  apiKey: "AIzaSyCrFAyCCJeevpFhpO52cKjazDTC91Lfhtk",
  authDomain: "dallins-test-project.firebaseapp.com",
  databaseURL: "https://dallins-test-project.firebaseio.com",
  projectId: "dallins-test-project",
  storageBucket: "dallins-test-project.appspot.com",
  messagingSenderId: "435979016045"
};
firebase.initializeApp(config);

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
//for Facebook when live
//Site URL: https://dallins-test-project.firebaseapp.com/__/auth/handler
//App Domains:
// dallins-test-project.firebaseio.com
// dallins-test-project.firebaseapp.com
