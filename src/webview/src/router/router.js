import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
	path: '/',
	name: 'index',
	component: () => import ('views/index'),
	meta: {
		showFooterBar: true,
		hideBackBtn: true,
		title: '腾跃易招生',
	}
}]

const router = new VueRouter({
	routes
});

router.beforeEach((to, from, next) => {
	next()
});

router.afterEach((to, from) => {

});

export default router;