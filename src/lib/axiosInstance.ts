import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: "https://mogazoa-api.vercel.app/2-4",
  headers: {
    "Content-type": "application/json",
  },
});

// 요청 전에 토큰을 포함시키는 인터셉터
instance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("login");
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
