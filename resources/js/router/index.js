import Vue from 'vue'
import routes from './routes'
import Router from 'vue-router'

Vue.use(Router);

const router = new Router({
    routes: routes(),
    mode: 'history',
});
console.log(router);

export default router;
