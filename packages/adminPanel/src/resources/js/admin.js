import Vue from 'vue';
import store from './store';
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core'
//Solid
import {
    faAngleUp,
    faFilter,
    faSearch,
    faOutdent,
    faBars,
    faTachometerAlt,
    faList,
    faUsers,
    faDumbbell,
    faChartArea,
    faUserTie,
    faClipboardList,
    faPlaceOfWorship,
    faAngleLeft,
    faSort,
    faSortAmountDown,
    faSortAmountUp,
    faSync
} from '@fortawesome/free-solid-svg-icons'
//Brans
import {
    faCriticalRole,
    faStrava,
    faBloggerB
} from '@fortawesome/free-brands-svg-icons'
//Regular
import {
    faTimesCircle,
    faEye,
    faImages,
    faFileAlt,
    faBell,
    faNewspaper
} from '@fortawesome/free-regular-svg-icons'
library.add(
    faSort,
    faSortAmountDown,
    faSortAmountUp,
    faSync,
    faOutdent,
    faEye,
    faTimesCircle,
    faAngleUp,
    faFilter,
    faSearch,
    faBars,
    faTachometerAlt,
    faList,
    faUsers,
    faCriticalRole,
    faImages,
    faFileAlt,
    faDumbbell,
    faBell,
    faStrava,
    faBloggerB,
    faNewspaper,
    faChartArea,
    faUserTie,
    faClipboardList,
    faPlaceOfWorship,
    faAngleLeft
);

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.component('font-awesome-icon', FontAwesomeIcon);

import axios from 'axios';
//Vue.component('axios', axios);

import AdminPanel from './components/admin/AdminPanel';

const admin = new Vue({
    store,
    router,
    ...AdminPanel
}).$mount('#admin');
faTimesCircle