<template>
    <div class="blog">
        <article class="md">
            {{{content}}}
        </article>
    </div>
</template>

<script>
import  vuex from "../vuex";
import {fetchBlog} from "../utils";

export default{
    name: "blog",
    data(){
        return {
            content:""
        }
    },
    computed:{
        url() {
            return vuex.state.currentPost;
        }
    },
    watch:{
        'url':function(url){
            fetchBlog(url).then((text)=>{
                this.content = text;
            });
        }
    }
}
</script>
