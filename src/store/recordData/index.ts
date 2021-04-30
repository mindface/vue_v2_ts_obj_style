import { Module } from "vuex";
import { RootState, StateType } from "@/store/recordData/interface";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

const state: StateType = {
  record_data: [
    {
      id: 0,
      argent_id: 0,
      data_id: 0,
      title: "title",
      category: "category",
      body: "body",
      created_at: "2021-04-25T11:20:56.006Z",
      updated_at: "2021-04-25T11:20:56.006Z",
    },
  ],
};

export const record: Module<StateType, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
