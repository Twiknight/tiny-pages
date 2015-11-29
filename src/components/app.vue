<template>
    <div class="app" id="wrapper">
        <!--header-->
        <blogHeader></blogHeader>
        <Banner></Banner>
        <div class="content">
            <blog></blog>
            <sidebar></sidebar>
        </div>
    </div>
</template>

<style lang="less">
    @backcolor:#efefef;
    @padding: 20px 15px;
    .app{
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        .content{
            background-color: @backcolor;
            padding: @padding;
        }
    }
</style>

<script lang="babel">
import Vue from "vue";

import Banner from "./Banner.vue";
import BlogHeader from "./BlogHeader.vue";
import Blog from "./Blog.vue";
import Sidebar from "./Sidebar.vue"

export default{
    name:"App",
    props:["currentPost"],
    components: {
        banner : Banner,
        blogheader: BlogHeader,
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
