<template>
    <div class="blog">
        <article class="md">
            {{{content}}}
        </article>
    </div>
</template>

<script>
import  vuex from "../vuex";
import marked from "marked";

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
            let _this = this;
            fetch(url).then(function(response){
                return response.text();
            }).then(function(text){
                _this.content = marked(text);
            }).catch(function(ex){
                console.log(ex.message);
            });
        }
    }
}
</script>
