import camelcaseKeys from "camelcase-keys";
import { destroyCookie, parseCookies, setCookie } from "nookies";

export const deleteRefreshToken = (
  ctx?: Parameters<typeof destroyCookie>[0]
): void => {
  destroyCookie(ctx, "refresh_token", {
    path: "/",
  });
};

export const getRefreshToken = (
  ctx?: Parameters<typeof parseCookies>[0]
): string | undefined => {
  const { refreshToken } = camelcaseKeys(parseCookies(ctx), { deep: true });

  return refreshToken || undefined;
};

export const setRefreshToken = ({
  ctx,
  refreshToken,
}: {
  ctx?: Parameters<typeof setCookie>[0];
  refreshToken: string;
}): void => {
  setCookie(ctx, "refresh_token", refreshToken, {
    path: "/",
  });
};

export default { deleteRefreshToken, getRefreshToken, setRefreshToken };
