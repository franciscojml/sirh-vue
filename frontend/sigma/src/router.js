import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from './components/Dashboard.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'dashboard',
			component: Dashboard
		},
		{
			path: '/empregados',
			name: 'empregados',
			component: () => import('./components/pessoais/Empregados.vue')
		},
	],
	scrollBehavior() {
		return {x: 0, y: 0};
	}
});