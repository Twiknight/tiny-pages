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

<style lang="less">
    .post-list{
        margin-top: 20px;
        ul{
            list-style: none;
            padding: 0;
            li{
                font-size: 1.5em;
                div::after{
                    content:"";
                    border-bottom:solid;
                    border-color:#efefef;
                }
                div:hover{
                    background-color: #efefef;
                }
            }
        }
    }
</style>

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
