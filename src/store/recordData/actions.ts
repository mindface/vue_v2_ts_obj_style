import { ActionTree } from "vuex";
import axios from "axios";
import { RecordData, RootState, StateType } from "@/store/recordData/interface";
const config = {
  headers: {
    "Content-type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
  },
};
const actions: ActionTree<StateType, RootState> = {
  getRecordData: async ({ commit }, record_data: RecordData[]) => {
    commit("addSettingData", record_data);
  },
  async setRecordAction({ commit }) {
    const argent_id = localStorage.getItem("argent-id");
    const res = await axios.get(
      `http://localhost:3001/api/v1/meta?client_id=${argent_id}`,
      config
    );
    console.log("res");
    console.log(res);
    if (res.status < 400) {
      commit("addSettingData", res.data);
    }
  },
};

export default actions;
