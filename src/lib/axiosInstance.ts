import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { getToken } from "../apis/auth";

const instance = axios.create({
  baseURL: "https://mogazoa-api.vercel.app/2-4",
});

// 요청 전에 토큰을 포함시키는 인터셉터
instance.interceptors.request.use(async (config) => {
  config.headers = config.headers ?? {};
  if (config.data instanceof FormData) {
    config.headers["Content-Type"] = "multipart/form-data";
  } else {
    config.headers["Content-Type"] = "application/json";
  }

  // 클라이언트 여부(브라우저 환경에서 실행되는건지) 확인 후 맞으면 accessToken 추가
  const isClient = typeof window !== "undefined";
  if (isClient) {
    try {
      const accessToken = await getToken();
      if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
    } catch (error) {
      console.error("interceptors에서 accessToken을 가져오는 데 실패했어요!", error);
    }
  }

  return config;
});

export default instance;

// api 요청하는 함수
// 작성하는 방법은 apis > product > index 참고
const HttpMethods = {
  GET: "get",
  POST: "post",
  DELETE: "delete",
  PATCH: "patch",
} as const;

export interface apiCallProps<U = unknown> {
  method: (typeof HttpMethods)[keyof typeof HttpMethods];
  endPoint: string;
  data?: U;
  config?: AxiosRequestConfig;
}

export async function apiCall<T, U>({ method, endPoint, data, config }: apiCallProps<U>) {
  try {
    const response: AxiosResponse<T> = await instance({
      method,
      url: endPoint,
      data,
      ...config,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
