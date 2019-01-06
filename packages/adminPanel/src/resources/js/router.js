import Vue from 'vue';
import Router from 'vue-router';

// import routeImporter from './modules/importers/routeImporter';
// import before from './middleware/before';
// import after from './middleware/after';

Vue.use(Router);

//import UsersPage from './components/admin/page/UsersPage'
const UsersPage = () => import('./components/admin/page/UsersPage.vue');
const NewUserPage = () => import('./components/admin/page/NewUserPage.vue');

const Foo = { template: '<div>Foo</div>' };
const Bar = { template: '<div>Bar</div>' };
const Idx = { template: '<div>Idx</div>' };
const Role = { template: '<div>Role</div>' };

const M11 = { template: '<div>M11</div>' };
const M12 = { template: '<div>M12</div>' };
const M13 = { template: '<div>M13</div>' };

const Slider = { template: '<div>Slider</div>' };
const Page = { template: '<div>Page</div>' };
const Fitnes = { template: '<div>Fitnes</div>' };

const routes = [
    { path: '/admin', component: Idx },
    { path: '/admin/foo', component: Foo },
    { path: '/admin/bar', component: Bar },
    { path: '/admin/users', name: 'users', component: UsersPage },
    { path: '/admin/user/new', name: 'new-user', component: NewUserPage },
    { path: '/admin/role', component: Role },
    { path: '/admin/m11', component: M11 },
    { path: '/admin/m12', component: M12 },
    { path: '/admin/m13', component: M13 },
    { path: '/admin/slider', component: Slider },
    { path: '/admin/page', component: Page },
    { path: '/admin/fitnes', component: Fitnes },
];

const router = new Router({
    mode: 'history',
    routes,
});

// router.beforeEach(before);
// router.afterEach(after);

export default router;
