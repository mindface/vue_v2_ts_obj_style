import { ActionTree } from "vuex";
import axios from "axios";
import {
  UserData,
  RootState,
  StateType,
  SendLoginData,
} from "@/store/user/interface";
const config = {
  headers: {
    "Content-type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
  },
};
const actions: ActionTree<StateType, RootState> = {
  getData: async ({ commit }, user_data: UserData[]) => {
    commit("addSettingData", user_data);
  },
  loginAction: async ({ commit }, login_data: SendLoginData) => {
    const res = await axios.post(
      "http://localhost:3001/api/v1/auth/sign_in",
      login_data
    );
    console.log(res);
    if (res.status < 400) {
      localStorage.setItem("access-token", res.headers["access-token"]);
      localStorage.setItem("client", res.headers.client);
      localStorage.setItem("uid", res.headers.uid);
      localStorage.setItem("token-type", res.headers["token-type"]);
      localStorage.setItem("argent-id", res.data.data.id);
      const sendData: UserData = {
        client: res.headers.client,
        "access-token": res.headers["access-token"],
        uid: res.headers.uid,
      };
      commit("addUserData", sendData);
    }
  },
  logoutAction({ commit }) {
    localStorage.setItem("access-token", "");
    localStorage.setItem("client", "");
    localStorage.setItem("uid", "");
    localStorage.setItem("token-type", "");
    const sendData: UserData = {
      client: "",
      "access-token": "",
      uid: "",
    };
    commit("addUserData", sendData);
  },
  async setReadaidAction({ commit }) {
    const user_id = localStorage.getItem("user-id");
    const res = await axios.get(
      `http://localhost:3001/api/v1/readaids`,
      config
    );
    console.log(res);
    if (res.status < 400) {
      commit("addSettingData", res.data);
    }
  },
};

export default actions;
