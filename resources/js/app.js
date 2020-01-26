import Vue from 'vue';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'
import router from './router';

import App from './App.vue';

Vue.use(ElementUI, { locale });

new Vue({
    router,
    ...App
}).$mount('#app');
