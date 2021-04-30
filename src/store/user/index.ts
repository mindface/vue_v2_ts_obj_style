import { Module } from "vuex";
import { UserData, RootState, StateType } from "@/store/user/interface";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

const state: StateType = {
  applicationMessage: "",
  user_info: {
    client: "",
    "access-token": "",
    uid: "",
  },
};

export const user: Module<StateType, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
