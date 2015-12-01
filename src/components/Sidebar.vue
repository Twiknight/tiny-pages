<template>
    <aside class="sidebar">
        <div>
            <h3 class="title">{{$parent.site.author}}</h3>
            <h4>{{$parent.site.biography}}</h4>
            <a href="{{$parent.site.homepage}}"><h4>{{$parent.site.homepage}}</h4></a>
        </div>
        <postlist :posts="$parent.site.posts"></postlist>
    </aside>
</template>

<script>
    import PostList from "./PostList.vue"

    export default {
        name:"sidebar",
        components:{
            postlist:PostList
        }
    }
</script>
