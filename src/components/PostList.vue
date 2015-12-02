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
    export default{
        name:"postlist",
        props:["posts"],
        methods:{
            loadPost(url){
                this.$dispatch("post-change", url);
            }
        }
    }
</script>
