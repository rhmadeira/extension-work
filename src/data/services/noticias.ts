import { api } from "../libs/axios";

export const getAllNoticias = async () => {
  const { data } = await api.get("/noticias");
  return data;
};
