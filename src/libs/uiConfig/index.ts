import firebase from "libs/firebase";
import "firebase/auth";

const uiConfig = {
  signInFlow: "redirect",
  signInOptions: [firebase.auth.TwitterAuthProvider.PROVIDER_ID],
  signInSuccessUrl: "/",
};

export default uiConfig;
