<template>
    <aside class="sidebar">
        <div>
            <h3 class="block-title">{{author}}</h3>
            <h4>{{biography}}</h4>
            <a href="{{homepage}}"><h4>{{homepage}}</h4></a>
        </div>
        <postlist></postlist>
    </aside>
</template>

<script>
    import PostList from "./PostList.vue"
    import vuex from "../vuex"

    export default {
        name:"sidebar",
        components:{
            postlist:PostList
        },
        computed:{
            author(){
                return vuex.state.site.author;
            },
            biography(){
                return vuex.state.site.biography;
            },
            homepage(){
                return vuex.state.site.homepage;
            }
        }
    }
</script>
