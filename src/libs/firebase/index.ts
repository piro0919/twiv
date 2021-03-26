import firebase from "firebase/app";
import getConfig from "next/config";

if (!firebase.apps.length) {
  const {
    publicRuntimeConfig: {
      apiKey,
      appId,
      authDomain,
      databaseURL,
      measurementId,
      messagingSenderId,
      projectId,
      storageBucket,
    },
  } = getConfig();

  const firebaseConfig = {
    apiKey,
    appId,
    authDomain,
    databaseURL,
    measurementId,
    messagingSenderId,
    projectId,
    storageBucket,
  };

  firebase.initializeApp(firebaseConfig);
}

export default firebase;
