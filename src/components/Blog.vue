<template>
    <div class="blog">
        <article>
            {{{content}}}
        </article>
    </div>
</template>

<script>
    import marked from "marked";

    export default{
        name: "blog",
        data(){
            return {
                content:""
            }
        },
        events:{
            'post-change':function(url){
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
