const resetCookieData = () => {
  document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; secure; SameSite=None;";
  document.cookie = "userId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; secure; SameSite=None;";
};

export default resetCookieData;
