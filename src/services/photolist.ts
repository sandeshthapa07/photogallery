import { api } from "../api/apiClient";
import { PhotoResponse } from "../dtos/allproductsDTO";

export const getPhotoList = async () => {
  const response = await api.get<PhotoResponse>("/photos");
  return response.data;
};
