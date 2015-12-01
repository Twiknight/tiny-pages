<template>
    <div class="post-list">
        <ul v-if="posts">
            <li v-for="post in posts" v-on:click="loadPost(post.url)">
                <div>
                    {{post.title}}
                </div>
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
