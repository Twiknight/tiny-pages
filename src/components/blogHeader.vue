<template>
    <div class="page-header">
        <h1>{{blog.title}}</h1>
        <h1><small>{{blog.subtitle}}</small></h1>
    </div>
</template>

<script>
    export default {
        name : 'BlogHeader',
        data(){
            return {
                blog:{}
            }
        },
        created(){
            fetch('blog.json').then(function(response){
                return response.json();
            }).then(function(json){
                this.blog = json;
            }).catch(function(ex){
                console.log(ex.message);
            });
        }
    }
</script>
