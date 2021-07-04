import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXjUjnA76LVJHxXiXhbuBpPkGz4hQUX3A",
  authDomain: "project-so-main.firebaseapp.com",
  databaseURL: "https://project-so-main-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project-so-main",
  storageBucket: "project-so-main.appspot.com",
  messagingSenderId: "657663250009",
  appId: "1:657663250009:web:e605b45e53428351e92b48",
  measurementId: "G-0WFGD2NLRZ"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.database();

/**
 * Login into Firebase!
 * @param username credentials 1 : username (email)
 * @param password credentials 2 : password
 * @returns loginStatus
 */
export async function fire_login(username: string = null, password: string = null) {
  if (username !== null && password != null) {
    let loginStatus: string;

    await auth.signInWithEmailAndPassword(username, password)
      .then((userCredential) => {
        // Successfully logged in:
        loginStatus = "You are successfully logged IN !"
      })
      .catch((error) => {
        // Unable to login:
        var errorMessage = error.message;
        loginStatus = errorMessage
      });

    return loginStatus;
  }
}
