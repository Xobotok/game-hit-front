import Vuex from "vuex";
import axios from "axios";
import CONSTANTS from "../../CONSTANTS";

const store = new Vuex.Store({
  modules: {},
});
store.action = (action, params = null) => {
    return axios.get(CONSTANTS.BASE_URL + action, params);
}
store.CONSTANTS = CONSTANTS;
store.BASE_URL = CONSTANTS.BASE_URL;
store.axios = axios;

export default store;
