import camelcaseKeys from "camelcase-keys";
import { destroyCookie, parseCookies, setCookie } from "nookies";

export const deleteIdToken = (
  ctx?: Parameters<typeof destroyCookie>[0]
): void => {
  destroyCookie(ctx, "id_token", {
    path: "/",
  });
};

export const getIdToken = (
  ctx?: Parameters<typeof parseCookies>[0]
): string | undefined => {
  const { idToken } = camelcaseKeys(parseCookies(ctx), { deep: true });

  return idToken || undefined;
};

export const setIdToken = ({
  ctx,
  idToken,
}: {
  ctx?: Parameters<typeof setCookie>[0];
  idToken: string;
}): void => {
  setCookie(ctx, "id_token", idToken, {
    path: "/",
  });
};

export default { deleteIdToken, getIdToken, setIdToken };
