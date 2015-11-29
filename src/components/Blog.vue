<template>
    <div class="blog">
        <article >
            {{{content}}}
        </article>
    </div>
</template>

<style lang="less">
    @padding: 30px 10px;
    @backcolor: #fff;
    .blog{
        width: 75%;
        float:left;
        padding: 0 15px;
        article{
            padding: @padding;
            background-color: @backcolor;
        }
    }
</style>

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
