import Vue from 'vue'
import Vuex from 'vuex'

import user from "./modules/user";
import team from "./modules/team";
import school from "./modules/school";
import edit from "./modules/edit";
import client from "./modules/client";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        client,
        user,
        team,
        edit,
        school
    }
});
