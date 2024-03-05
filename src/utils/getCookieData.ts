const getAccessToken = () => {
  if (!document.cookie) return null;

  const userCookie = document.cookie.split("; ");
  const accessToken = userCookie[0].split("=")[1];

  return accessToken;
};

const getUserId = () => {
  if (!document.cookie) return null;

  const userCookie = document.cookie.split("; ");
  const userId = userCookie[1].split("=")[1];

  return userId;
};

export { getAccessToken, getUserId };
