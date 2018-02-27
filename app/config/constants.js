import firebase from 'firebase'


// const config = {
//   apiKey: "AIzaSyCrFAyCCJeevpFhpO52cKjazDTC91Lfhtk",
//   authDomain: "dallins-test-project.firebaseapp.com",
//   databaseURL: "https://dallins-test-project.firebaseio.com",
//   projectId: "dallins-test-project",
//   storageBucket: "dallins-test-project.appspot.com",
//   messagingSenderId: "435979016045"
// };
// firebase.initializeApp(config);

const config = {
  apiKey: "AIzaSyAygs-SlkgfJvJ_Tdux7-hBpZ8Z30Bj16Y",
  authDomain: "duckr-89aa1.firebaseapp.com",
  databaseURL: "https://duckr-89aa1.firebaseio.com",
  projectId: "duckr-89aa1",
  storageBucket: "duckr-89aa1.appspot.com",
  messagingSenderId: "22245849391"
};
firebase.initializeApp(config);

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth

export const usersDucksExpirationLength = 100000
export const userExpirationLength = 100000
export const repliesExpirationLength = 300000
