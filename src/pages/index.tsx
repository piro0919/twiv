import { GetServerSideProps } from "next";
import React, { FC, useMemo } from "react";
import usePwa from "use-pwa";
import Public from "components/templates/Public";
import Top from "components/templates/Top";
import useAuth from "hooks/useAuth";
import firebase from "libs/firebase";
import { getIdToken } from "libs/idToken";
import "firebase/auth";
import { NextSeo } from "next-seo";

export type PagesProps = {
  isSignin: boolean;
};

const Pages: FC<PagesProps> = ({ isSignin }: PagesProps) => {
  const firebaseAuth = useMemo(() => firebase.auth(), []);
  const auth = useAuth();
  const { displayName, photoUrl } = useMemo(
    () => auth || { displayName: "", photoUrl: "" },
    [auth]
  );
  const {
    appinstalled,
    canInstallprompt,
    enabledPwa,
    handleClickOnInstallPrompt,
  } = usePwa();
  const disabledPwa = useMemo(
    () => appinstalled || !canInstallprompt || !enabledPwa,
    [appinstalled, canInstallprompt, enabledPwa]
  );

  return (
    <>
      <NextSeo noindex={true} />
      {isSignin || auth ? (
        <Top
          disabledPwa={disabledPwa}
          displayName={displayName}
          handleClickAddHome={handleClickOnInstallPrompt}
          photoUrl={photoUrl}
        />
      ) : (
        <Public firebaseAuth={firebaseAuth} />
      )}
    </>
  );
};

type ServerSideProps = {
  isSignin: boolean;
};

export const getServerSideProps: GetServerSideProps<ServerSideProps> = async (
  ctx
) => {
  const idToken = getIdToken(ctx);

  return {
    props: {
      isSignin: !!idToken,
    },
  };
};

export default Pages;
