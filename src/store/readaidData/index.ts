import { Module } from "vuex";
import {
  ReadaidData,
  RootState,
  StateType,
} from "@/store/readaidData/interface";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

const state: StateType = {
  readaid_data: [
    {
      id: 0,
      title: "string",
      body: "string",
      reedtag_id: 0,
      created_at: "string",
      updated_at: "string",
    },
  ],
};

export const readaid: Module<StateType, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
