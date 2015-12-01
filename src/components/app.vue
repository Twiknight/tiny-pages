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

import Banner from "./Banner.vue";
import Blog from "./Blog.vue";
import Sidebar from "./Sidebar.vue"

export default{
    name:"App",
    props:["currentPost"],
    components: {
        banner : Banner,
        blog:Blog,
        sidebar:Sidebar
    },
    data(){
        return {
            site:{}
        }
    },
    created(){
        let _this = this;
        fetch('./site.json').then(function(response){
            return response.json();
        }).then(function(json){
            _this.site = json;
        }).then(function(){
            if(_this.site.posts && _this.site.posts.length>0){
                _this.$broadcast("post-change", _this.site.posts[0].url);
            }
        }).catch(function(ex){
            console.log(ex.message);
        });
    },
    events:{
        "post-change": function(url){
            this.$broadcast("post-change", url);
        }
    }
}
</script>
