import { GetterTree } from "vuex";
import { UserData, RootState, StateType } from "@/store/user/interface";

const getters: GetterTree<StateType, RootState> = {
  getUserData: (state: StateType) => {
    return state.user_info;
  },
  getUserUidData: (state: StateType) => {
    return state.user_info.uid;
  },
};

export default getters;
