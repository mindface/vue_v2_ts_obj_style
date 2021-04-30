import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./rootInterface";
import { readaid } from "./readaidData";
import { record } from "./recordData";
import { user } from "./user";

export const store: StoreOptions<RootState> = {
  state: {
    version: "1.0.0",
  },
  modules: {
    readaid,
    user,
    record
  },
};

export default new Vuex.Store<RootState>(store);
