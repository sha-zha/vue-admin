import './assets/main.css';
import { createApp } from 'vue';
import {createRouter, createWebHistory} from 'vue-router';
import App from './App.vue';
//Page
import LoginPage from './views/LoginPage.vue';
import UserIndex from './views/Users/Index.vue';
import UserShow from './views/Users/Show.vue';
import UserAdd from './views/Users/Add.vue';
import UserEdit from './views/Users/Edit.vue';
import CheckpointIndex from './views/Checkpoints/Index.vue';
import CheckpointAdd from './views/Checkpoints/Add.vue';
import SignupPage from './views/Auth/SignupPage.vue';
import PostIndex from './views/Posts/Index.vue';
import PostAdd from './views/Posts/Add.vue';
import HelpIndex from './views/Helps/Index.vue';
import HomePage from './views/HomePage.vue';
import LandingPage from './views/LandingPage.vue';

const routes = [{
  path: '/',
  name: 'home',
  component: HomePage,
},
{
  path: '/landing',
  name: 'Landing',
  component: LandingPage,
}
,
{
    path: '/signin',
    name: 'Login',
    component: LoginPage,//shsould be imported 
},
{
  path: '/signup',
  name: 'Signup',
  component: SignupPage,
},
{
  path: '/admin/posts',
  name:'Posts',
  component: PostIndex,
},
{
  path: '/admin/posts/add',
  name:'PostsAdd',
  component: PostAdd,
},
{
  path: '/admin/helps',
  name: 'Helps',
  component: HelpIndex,
},
{
path:'/admin/users',
name: 'user',
component: UserIndex,
},
{
path:'/admin/users/:id',
name: 'userShow',
component: UserShow,
},
{
path:'/admin/users/add',
name: 'userAdd',
component: UserAdd,
},
{
path:'/admin/users/edit/:id',
name: 'userEdit',
component: UserEdit,
},
{
path: '/admin/checkpoints',
name: 'checkpoints',
component: CheckpointIndex,
},
{
path: '/admin/checkpoints/add',
name: 'checkpointsAdd',
component: CheckpointAdd,
}];

const router = createRouter({
  history: createWebHistory(""),
  routes
});

createApp(App).use(router).mount('#app')