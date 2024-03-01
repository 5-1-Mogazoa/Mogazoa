export const PAGE_ROUTES = {
  SIGNIN: "/signin",
  SIGNUP: "/signup",
  OAUTH_SIGNUP: "/oauth/signup",
  COMPARE: "/compare",
  MY_PAGE: "/mypage",
  PRODUCT_DETAIL: (productId: number) => `/product/${productId}`,
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
  AUTH_SIGNUP_OAUTH: (provider: string) => `/auth/signUp/${provider}`,
  AUTH_SIGNIN_OAUTH: (provider: string) => `/auth/signIn/${provider}`,
};
