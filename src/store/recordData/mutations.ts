import { MutationTree } from "vuex";
import { RecordData, StateType } from "@/store/recordData/interface";

const mutations: MutationTree<StateType> = {
  addSettingData: async (state, record_data: RecordData[]) => {
    state.record_data = record_data;
  },
};

export default mutations;
