import Vue from 'vue';
// import Router from 'vue-router';
import App from './components/app.vue';
import Banner from './components/Banner.vue';
import BlogHeader from './components/BlogHeader.vue';

// Vue.use(Router);

// let router = new Router();

new Vue({
    el:"body",
    components: {
        app:App
    }
});
