import { GetterTree } from "vuex";
import { RootState, StateType } from "@/store/recordData/interface";

const getters: GetterTree<StateType, RootState> = {
  getReadaidData: (state: StateType) => {
    return state.record_data;
  },
};

export default getters;
