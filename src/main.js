import Vue from 'vue';
import Router from 'vue-router';
import App from './components/app.vue';
import BlogHeader from './components/blogHeader.vue';

Vue.use(Router);

let router = new Router();

Vue.component("blogheader", BlogHeader);
router.start(App,"#main");
