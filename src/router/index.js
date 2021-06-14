import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import FastapiPage from '../views/backend/FastapiPage.vue';
import ReactPage from '../views/frontend/ReactPage.vue';
import MysqlPage from '../views/database/MysqlPage.vue';
import PostgresPage from '../views/database/PostgresPage.vue';
import VerilogPage from '../views/others/VerilogPage.vue';
import VhdlPage from '../views/others/VhdlPage.vue';
import CppPage from '../views/others/CppPage.vue';
import DrogonPage from '../views/backend/DrogonPage.vue';
import SpringBootPage from '../views/backend/SpringBootPage.vue';
import ExpressPage from '../views/backend/ExpressPage.vue';
import VuejsPage from '../views/frontend/VuejsPage.vue';
import TailwindcssPage from '../views/frontend/TailwindcssPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/fastapi',
    name: 'Fastapi',
    component: FastapiPage,
  },
  {
    path: '/express',
    name: 'Express',
    component: ExpressPage,
  },
  {
    path: '/springboot',
    name: 'SpringBoot',
    component: SpringBootPage,
  },
  {
    path: '/drogon',
    name: 'Drogon',
    component: DrogonPage,
  },
  {
    path: '/react',
    name: 'React',
    component: ReactPage,
  },
  {
    path: '/tailwindcss',
    name: 'Tailwindcss',
    component: TailwindcssPage,
  },
  {
    path: '/vuejs',
    name: 'Vuejs',
    component: VuejsPage,
  },
  {
    path: '/mysql',
    name: 'MysqlPage',
    component: MysqlPage,
  },
  {
    path: '/postgres',
    name: 'PostgresPage',
    component: PostgresPage,
  },
  {
    path: '/verilog',
    name: 'VerilogPage',
    component: VerilogPage,
  },
  {
    path: '/vhdl',
    name: 'VhdlPage',
    component: VhdlPage,
  },
  {
    path: '/cplusplus',
    name: 'CppPage',
    component: CppPage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
