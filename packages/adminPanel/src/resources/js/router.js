import Vue from 'vue';
import Router from 'vue-router';

// import routeImporter from './modules/importers/routeImporter';
// import before from './middleware/before';
// import after from './middleware/after';

Vue.use(Router);

import UsersPage from './components/admin/page/UsersPage'
//const UsersPage = () => import('./components/admin/page/UsersPage.vue');

const Foo = { template: '<div>Foo</div>' };
const Bar = { template: '<div>Bar</div>' };
const Idx = { template: '<div>Idx</div>' };


const routes = [
    { path: '/admin', component: Idx },
    { path: '/admin/foo', component: Foo },
    { path: '/admin/bar', component: Bar },
    { path: '/admin/users', component: UsersPage }
    // { path: '/admin', redirect: '/admin/foo' }
];

const router = new Router({
    mode: 'history',
    routes,
});

// router.beforeEach(before);
// router.afterEach(after);

export default router;
