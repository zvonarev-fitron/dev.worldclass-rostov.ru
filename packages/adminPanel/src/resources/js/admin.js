import Vue from 'vue';
import store from './store';
import router from './router';

import AdminPanel from './components/admin/AdminPanel';

const admin = new Vue({
    store,
    router,
    ...AdminPanel
}).$mount('#admin');
