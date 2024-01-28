import axios from "axios";
import { baseUrl } from "./Api";
import Cookie from "cookie-universal";

const cookie = Cookie();
const token = cookie.get("dashboard");

export const Axios = axios.create({
  // @ts-ignore
  baseURL: baseUrl,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
