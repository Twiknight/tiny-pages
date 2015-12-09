<template>
    <div class="app" id="wrapper">
        <Banner></Banner>
        <div class="content">
            <blog></blog>
            <sidebar></sidebar>
        </div>
    </div>
</template>

<script lang="babel">
import Vue from "vue";
import vuex from "../vuex"

import Banner from "./Banner.vue";
import Blog from "./Blog.vue";
import Sidebar from "./Sidebar.vue"

const loadSite  = vuex.actions.loadSite;
const changePost = vuex.actions.changePost;

export default{
    name:"App",
    props:["currentPost"],
    components: {
        banner : Banner,
        blog:Blog,
        sidebar:Sidebar
    },
    created(){
        fetch('./site.json').then(function(response){
            return response.json();
        }).then(function(site){
            loadSite(site);
            if(site.posts && [...site.posts].length>0){
                changePost(site.posts[0].url);
            }
        }).catch(function(ex){
            console.log(ex.message);
        });
    }
}
</script>
