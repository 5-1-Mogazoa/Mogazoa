import { apiCall } from "@/src/lib/axiosInstance";
import { API_ROUTE } from "@/src/routes";

// 이미지 업로드
export const postImage = (imageFile: File) => {
  const formData = new FormData();
  formData.append("image", imageFile);

  const requestProps = {
    method: "post",
    endPoint: API_ROUTE.IMAGE_UPLOAD,
    data: formData,
  };

  return apiCall(requestProps);
};
