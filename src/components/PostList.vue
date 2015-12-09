<template>
    <div class="post-list">
        <h3 class="block-title">Articles</h3>
        <ul v-if="posts">
            <li v-for="post in posts" v-on:click="loadPost(post.url)">
                    {{post.title}}
            </li>
        </ul>
    </div>
</template>

<script>
import vuex from '../vuex';

const changePost = vuex.actions.changePost;

export default{
    name:"postlist",
    methods:{
        loadPost(url){
            changePost(url);
        }
    },
    computed:{
        posts(){
            return vuex.state.site.posts;
        }
    }
}
</script>
