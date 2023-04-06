import { createRouter, createWebHistory } from 'vue-router'
import MovieSearch from '../views/MovieSearchView.vue';
import Profile from '../views/ProfileView.vue';
import UserAuth from '../views/UserAuth.vue';
import NotFound from '../components/nav/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/movie-search' },
    { name: 'user-search', path: '/movie-search', component: MovieSearch },
    { name: 'profile-page', path: '/profile', component: Profile },
    { name: 'auth', path: '/auth', component: UserAuth },
    { path: '/:notFound(.*)', component: NotFound }
  ]
})

export default router
