export const BASE_URL = "http://localhost:3000"; // TODO 배포후 주소 수정하기 "https://mogazoa-api.vercel.app/2-4"

export const PAGE_ROUTES = {
  SIGNIN: "/signin",
  SIGNUP: "/signup",
  OAUTH_SIGNUP: "/oauth/signup",
  COMPARE: "/compare",
  MY_PAGE: "/mypage",
  PRODUCT_DETAIL: (productId: number) => `/products/${productId}`,
  USER_DETAIL: (userId: number) => `/user/${userId}`,
};

export const API_ROUTE = {
  USERS_MYDATA: "/users/me",
  USERS_RANK: "/users/ranking",
  USERS_DATA: (userId: number) => `/users/${userId}`,
  USERS_CREATED_PRODUCT: (userId: number) => `/users/${userId}/created-products`,
  USERS_REVIEWED_PRODUCT: (userId: number) => `/users/${userId}/reviewed-products`,
  USERS_FAVORITE_PRODUCT: (userId: number) => `/users/${userId}/favorite-products`,
  USERS_FOLLOWEES: (userId: number) => `/users/${userId}/followees`,
  USERS_FOLLOWERS: (userId: number) => `/users/${userId}/followers`,

  REVIEWS_LIKE: (reviewId: number) => `/reviews/${reviewId}/like`,
  REVIEWS_CREATE: `/reviews`,
  REVIEWS_EDIT_DELETE: (reviewId: number) => `/reviews/${reviewId}`,

  PRODUCTS: "/products",
  PRODUCT_DETAIL: (productId: number) => `/products/${productId}`,
  PRODUCT_REVIEWS: (productId: number) => `/products/${productId}/reviews`,
  PRODUCT_FAVORITE: (productId: number) => `/products/${productId}/favorite`,

  OATUH: "/oatuhApps",

  IMAGE_UPLOAD: "/images/upload",

  FOLLOW: "/follow",

  CATEGORY: "/categories",

  AUTH_SIGNUP: "/auth/signUp",
  AUTH_SIGNIN: "/auth/signIn",
  OAUTH_SIGNUP: (provider: string) => `/auth/signUp/${provider}`,
  OAUTH_SIGNIN: (provider: string) => `/auth/signIn/${provider}`,

  API_SETTOKEN: "/api/setToken",
  API_GETTOKEN: "/api/getToken",
  API_RESETTOKEN: "/api/resetToken",
};

export const QUERY_KEY = {
  RANKING: "ranking",
  CREATED_PRODUCTS: "createdProducts",
  PRODUCTS: "products",
  PRODUCT_DETAIL: "productDetail",
  REVIEWS: "reviews",
  FOLLOWEES: "followees",
  FOLLOWERS: "followers",
  FAVORITE: "favorite",
  CATEGORYS: "categories",
};

export const REVIEWS_LIMIT = 5;

export const PRODUCT_LIMIT = 12;
