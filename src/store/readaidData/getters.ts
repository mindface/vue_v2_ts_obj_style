import { GetterTree } from "vuex";
import {
  ReadaidData,
  RootState,
  StateType,
} from "@/store/readaidData/interface";

const getters: GetterTree<StateType, RootState> = {
  getReadaidData: (state: StateType) => {
    return state.readaid_data;
  },
};

export default getters;
