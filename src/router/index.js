import { createRouter, createWebHistory } from 'vue-router'
import MovieSearch from '../views/MovieSearchView.vue';
import Profile from '../views/ProfileView.vue';
import Register from '../views/RegisterView.vue';
import Login from '../views/LoginView.vue';
import NotFound from '../components/nav/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/movie-search' },
    { name: 'user-search', path: '/movie-search', component: MovieSearch },
    { name: 'profile-page', path: '/profile', component: Profile },
    { name: 'register', path: '/register', component: Register },
    { name: 'login', path: '/login', component: Login },
    { path: '/:notFound(.*)', component: NotFound }
  ]
})

export default router
