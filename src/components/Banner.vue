<template>
    <div class="banner">
        <h1>{{title}}</h1>
        <h1><small>{{subtitle}}</small></h1>
    </div>
</template>

<script lang="babel">
    import vuex from "../vuex";
    export default {
        name : 'Banner',
        computed:{
            title(){
                return vuex.state.site.title;
            },
            subtitle(){
                return vuex.state.site.subtitle;
            }
        }
    }
</script>
