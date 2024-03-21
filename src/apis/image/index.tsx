import { apiCall, apiCallProps } from "@/src/lib/axiosInstance";
import { API_ROUTE } from "@/src/routes";
import ShortUniqueId from "short-unique-id";
import { postImageResponseType } from "./schema";

// 이미지 업로드
export const postImage = (imageFile: File): Promise<postImageResponseType> => {
  const uid = new ShortUniqueId({ length: 10 });
  const randomUid = uid.rnd();
  const formData = new FormData();
  formData.append("image", imageFile, randomUid);

  const requestProps: apiCallProps = {
    method: "post",
    endPoint: API_ROUTE.IMAGE_UPLOAD,
    data: formData,
  };

  return apiCall(requestProps);
};
