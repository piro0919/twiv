import { GetServerSideProps } from "next";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import React, { FC, useCallback, useMemo } from "react";
import usePwa from "use-pwa";
import Public from "components/templates/Public";
import Top from "components/templates/Top";
import useAuth from "hooks/useAuth";
import firebase from "libs/firebase";
import { getIdToken } from "libs/idToken";
import "firebase/auth";

export type PagesProps = {
  isSignin: boolean;
};

const Pages: FC<PagesProps> = ({ isSignin }: PagesProps) => {
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
  const router = useRouter();
  const handleClickLogout = useCallback(async () => {
    await firebase.auth().signOut();

    router.reload();
  }, [router]);

  return (
    <>
      <NextSeo noindex={true} />
      {isSignin ? (
        <Top
          disabledPwa={disabledPwa}
          displayName={displayName}
          handleClickAddHome={handleClickOnInstallPrompt}
          handleClickLogout={handleClickLogout}
          photoUrl={photoUrl}
        />
      ) : (
        <Public />
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
