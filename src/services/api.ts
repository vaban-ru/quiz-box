import apiClient from "@/plugins/axios";
import type IAuth from "@/types/IAuth";
import type IAuthResponse from "@/types/IAuthResponse";
class Api {
  /**
   * Метод для авторизации пользователя
   */
  async auth(payload: IAuth): Promise<IAuthResponse> {
    const { data } = await apiClient.post("/auth", payload);
    return data;
  }
}

export default new Api();
