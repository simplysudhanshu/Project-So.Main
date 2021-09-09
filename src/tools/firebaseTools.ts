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
export const dbObject = firebase.database();

let dbRef = dbObject.ref();

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

/** 
 * Base Firebase DB Read function
 * @param base first base of the database.
 * @returns object fetched from DB.
*/
export async function dbRead(base: string = null, childLine: Array<string> = null) {
  let dbOutput = '';

  await dbRef.child(base).get().then((snapshot) => {
    if (snapshot.exists()) {
      console.log("Read value : ", snapshot);

      dbOutput = snapshot.val()
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });

  return dbOutput;
}

/**
 * Base Firebase function to write to DB
 * @param basePath DB basepath at where to write the content
 * @param content content to push 
 * @returns True or False based on try catch
 */
export async function dbWrite(basePath: string = null, content: string = null) {
  try { await dbObject.ref(basePath).set(content); return true }
  catch (e) { console.error(e); return false }
}