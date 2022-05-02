import { initializeApp } from "firebase/app";
import {GoogleAuthProvider,getAuth,signInWithPopup,signInWithEmailAndPassword,createUserWithEmailAndPassword,sendPasswordResetEmail,signOut} from "firebase/auth"
import {getFirestore,query,getDocs,collection,where,addDoc} from "firebase/firestore"
import toast from "react-hot-toast"
const firebaseConfig = {

    apiKey: "AIzaSyCr2bLeqHXIeyBeGJPliZ528R3e81qAXko",
  
    authDomain: "talk-python.firebaseapp.com",
  
    projectId: "talk-python",
  
    storageBucket: "talk-python.appspot.com",
  
    messagingSenderId: "418376693053",
  
    appId: "1:418376693053:web:825b700f77c14878084154",
  
    measurementId: "G-S8Y4DWY6M3"
  
  };


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider).then(async(res)=>{
          const user = res.user;
      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      const docs = await getDocs(q);
       if (docs.docs.length === 0) {
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          name: user.displayName,
          authProvider: "google",
          email: user.email,
        });
          toast.success(`Welcome ${user.displayName}`)
            if(user){
        window.location="/portal"
      }
      }
      

      }).catch((err)=>{
        toast.error(`An Error Occured`)
        
      });
    
     
    
    
   
    } catch (err) {
      console.error(err);
       toast.error(`An Error Occured`)
    }
  };
  const logInWithEmailAndPassword = async (email, password) => {
    try {
     const res = await signInWithEmailAndPassword(auth, email, password);
     const user = res.user
    //remember to change this on production
      toast.success("Login Successful")
            if(user){
        window.location="/portal"
      }
    } catch (error) {
          var errorCode = error.code;
      var errorMessage = error.message;

        if (errorCode === 'auth/user-not-found') {
          toast.error("No user is associated with details")
        } else if (errorCode === 'auth/wrong-password') {
           toast.error("Wrong user-email or password")
        }else if (errorCode === 'auth/invalid-email') {
           toast.error("Invalid Email")
        }


   
      
    }
    
  };
 
  const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
      toast.success(`Account Successfuly Created`)
  
    } catch (err) {
      const  errCode = err.code
      if(errCode=="auth/email-already-in-use"){
        
        toast.error("Email already in use")
      }
  else{
      toast.error("An Error Occcured")
  }
     
    }
  };
  const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  const logout = () => {
    signOut(auth);
  };


export {db, auth,provider,signInWithGoogle,logInWithEmailAndPassword,registerWithEmailAndPassword,sendPasswordReset,logout
}
