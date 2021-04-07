import { GetServerSideProps } from "next";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import React, { FC, useCallback, useMemo } from "react";
import { useBottomScrollListener } from "react-bottom-scroll-listener";
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
    enabledUpdate,
    isPwa,
    showInstallPrompt,
    unregister,
  } = usePwa();
  const router = useRouter();
  const handleClickLogout = useCallback(async () => {
    await firebase.auth().signOut();

    router.reload();
  }, [router]);
  const canAddHome = useMemo(() => !appinstalled && canInstallprompt, [
    appinstalled,
    canInstallprompt,
  ]);
  const enabledAddHome = useMemo(() => enabledPwa && !isPwa, [
    enabledPwa,
    isPwa,
  ]);

  useBottomScrollListener(
    () => {
      console.log("a");
    },
    {
      triggerOnNoScroll: true,
    }
  );

  return (
    <>
      <NextSeo noindex={true} />
      {isSignin ? (
        <Top
          canAddHome={canAddHome}
          canUpdate={enabledUpdate}
          displayName={displayName}
          enabledAddHome={enabledAddHome}
          enabledUpdate={isPwa}
          handleClickAddHome={showInstallPrompt}
          handleClickLogout={handleClickLogout}
          handleClickUpdate={unregister}
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
