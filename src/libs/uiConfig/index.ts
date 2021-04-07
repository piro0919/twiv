import firebase from "libs/firebase";
import "firebase/auth";

const uiConfig: firebaseui.auth.Config = {
  signInFlow: "redirect",
  signInOptions: [firebase.auth.TwitterAuthProvider.PROVIDER_ID],
  signInSuccessUrl: "/",
};

export default uiConfig;
