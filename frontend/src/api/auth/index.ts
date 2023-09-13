import { HTTP_METHOD } from "../../constants/api";
import instance from "../axios";

export const getKaKaoUser = (queryString: string) => {
  return instance({ url: `/login?${queryString}`, method: HTTP_METHOD.GET });
};