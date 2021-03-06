import Vue from 'vue';
import Vuex from 'vuex';

import { AsideLeft } from "./components/admin/modules/AsideLeft";
import { Tables } from "./components/admin/modules/Tables"
//import { UserTable } from "./components/admin/modules/UserTable";

Vue.use(Vuex);

export default new Vuex.Store({
//    strict: true,
    modules: {
        AsideLeft: AsideLeft,
        Tables: Tables
//        UserTable: UserTable
    }
})
