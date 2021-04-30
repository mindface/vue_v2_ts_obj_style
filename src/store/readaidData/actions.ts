import { ActionTree } from "vuex";
import axios from "axios";
import {
  ReadaidData,
  RootState,
  StateType,
} from "@/store/readaidData/interface";
const config = {
  headers: {
    "Content-type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
  },
};
const actions: ActionTree<StateType, RootState> = {
  getData: async ({ commit }, readaid_data: ReadaidData[]) => {
    commit("addSettingData", readaid_data);
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
