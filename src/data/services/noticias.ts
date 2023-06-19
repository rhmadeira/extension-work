import { api } from "../libs/axios";

export interface INoticias {
  id: number;
  manchete: string;
  imagem: string;
  lide: string;
  createdAt: string;
}
export interface INoticia {
  noticias: INoticias[];
}

export const getAllNoticias = async () => {
  const { data } = await api.get<INoticia>("/noticias");
  return data;
};
