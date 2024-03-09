import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: "https://mogazoa-api.vercel.app/2-4",
});

// 요청 전에 토큰을 포함시키는 인터셉터
instance.interceptors.request.use((config) => {
  config.headers = config.headers ?? {};
  if (config.data instanceof FormData) {
    config.headers["Content-Type"] = "multipart/form-data";
  } else {
    config.headers["Content-Type"] = "application/json";
  }

  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});

export default instance;

// api 요청하는 함수
// 작성하는 방법은 apis > product > index 참고

interface apiCallProps<U> {
  // method: "get" | "post" | "delete" | "patch";
  method: string;
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
