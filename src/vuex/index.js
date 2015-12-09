import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

const state = {
    site : {
        "title":"",
        "subtitle":"",
        "posts":[],
        "author":"",
        "biography":"",
        "homepage":""
    },
    currentPost:""
}

export default new Vuex({
    state,
    actions,
    mutations
})
