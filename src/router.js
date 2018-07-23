import Vue from 'vue';
import Router from 'vue-router';

// import Home from './views/Home.vue';
// import About from './views/About.vue';

import Prospectus from './home/Prospectus.vue';
import Login from './login/Login.vue';
import RegistrationDetails from './details/RegistrationDetails.vue';
import Application from './application/Application.vue';
import Confirmation from './confirmation/Confirmation.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home,
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: About,
    // },
    {
      path: '/',
      name: 'home',
      component: Prospectus,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/details',
      name: 'details',
      component: RegistrationDetails,
    },
    {
      path: '/application',
      name: 'application',
      component: Application,
    },
    {
      path: '/confirmation',
      name: 'confirmation',
      component: Confirmation,
    },
  ],
});
