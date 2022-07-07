import axios from "axios";
import type { AxiosInstance } from "axios";
const apiClient: AxiosInstance = axios.create({
  baseURL: "https://62c68a9874e1381c0a61c455.mockapi.io/api/v1",
});
export default apiClient;
