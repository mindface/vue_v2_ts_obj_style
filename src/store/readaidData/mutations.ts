import { MutationTree } from "vuex";
import {
  ReadaidData,
  RootState,
  StateType,
} from "@/store/readaidData/interface";

const mutations: MutationTree<StateType> = {
  addSettingData: async (state, readaid_data: ReadaidData[]) => {
    state.readaid_data = readaid_data;
  },
};

export default mutations;
