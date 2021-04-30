import { MutationTree } from "vuex";
import { UserData, StateType, GetLoginData } from "@/store/user/interface";

const mutations: MutationTree<StateType> = {
  addSettingData: (state, data: UserData) => {
    state.user_info = data;
  },
  addUserData: (state, data: UserData) => {
    state.user_info.client = data.client;
    state.user_info["access-token"] = data["access-token"];
    state.user_info.uid = data.uid;
    console.log(state);
    console.log("@@@@@@@");
    console.log(data);
  },
  setApplicationMssage: (state, mesaage: string) => {
    state.applicationMessage = mesaage;
  }
};

export default mutations;
