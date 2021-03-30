import "firebase/auth";
// import "firebase/analytics";
import { useEffect, useState } from "react";
import firebase from "libs/firebase";
import { deleteIdToken, setIdToken } from "libs/idToken";
import { setRefreshToken, deleteRefreshToken } from "libs/refreshToken";

export type AuthData = {
  displayName: string;
  photoUrl: string;
};

const useAuth = (): AuthData => {
  const [auth, setAuth] = useState<AuthData | undefined>(undefined);

  useEffect(() => {
    // firebase.analytics();

    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async (user) => {
        if (user) {
          const idToken = await user.getIdToken();
          const { displayName, photoURL, refreshToken } = user;

          setIdToken({ idToken });
          setRefreshToken({ refreshToken });
          setAuth({
            displayName,
            photoUrl: photoURL,
          });

          return;
        }

        deleteIdToken();
        deleteRefreshToken();

        setAuth(undefined);
      });

    return () => unregisterAuthObserver();
  }, []);

  return auth;
};

export default useAuth;
