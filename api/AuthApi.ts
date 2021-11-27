import axios from "axios";
import AccessTokenApiModel from "~/model/api/AccessTokenApiModel";
import LoginFormApiModel from "~/model/api/LoginFormApiModel";
import RefreshTokenFormModel from "~/model/form/RefreshTokenFormModel";
import TokenApiModel from "~/model/api/TokenApiModel";

export default {

  async login(email: string, password: string): Promise<TokenApiModel> {
    const body: LoginFormApiModel = {
      email: email,
      password: password,
    }
    return (await axios.post('/auth/teacher/login/', body)).data as TokenApiModel
  },

  async logout() {
    await axios.post('/auth/logout/')
  },

  async refreshToken(refreshToken: string): Promise<AccessTokenApiModel> {
    const body: RefreshTokenFormModel = {
      refresh: refreshToken
    }
    return (await axios.post('/auth/teacher/login/refresh/', body)).data as AccessTokenApiModel
  }
  
}
