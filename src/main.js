import Vue from 'vue';
import App from './components/app.vue';
import _fetch from 'whatwg-fetch';
import _promise from 'promise';

//polyfill for promise
if(!global.Promise){
  global.Promise = _promise;
}

//polyfill for fetch
if(!global.fetch){
  global.fetch = _fetch;
}



new Vue({
    el:"body",
    components: {
        app:App
    }
});
