import { createRouter, createWebHistory } from 'vue-router'
//@ts-ignore
import App from '../App.vue'
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ReadingView from '../views/hobbies/ReadingView.vue'
import StucoView from '../views/StucoView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView
		}, 
		{
			path: '/about',
			name: 'about',
			component: AboutView
		},
		{
			path: '/stuco',
			name: 'stuco',
			component: StucoView
		},
		{
			path:'/reading',
			name: 'reading',
			component: ReadingView,
		}
	]
})

export default router
