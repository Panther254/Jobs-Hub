import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signOut } from "firebase/auth";



const firebaseConfig = {
  apiKey: "jhjhhajhauhhjhew762937987298hdjshkhjsh@72873yvjsvsjlkjvjdsl",
  authDomain: "clone-64c67.firebaseapp.com",
  projectId: "clone-64c67",
  storageBucket: "clone-64c67.appspot.com",
  messagingSenderId: "659816473135",
  appId: "1:659816473135:web:edd709156b422c2afe5cda",
  measurementId: "G-04FKF5MENQ"
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider, signOut };