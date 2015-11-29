<template>
    <nav class="blogHeader">
        <ul v-if="navs.length">
            <li v-for="nav in navs"><a href="{{nav.link}}">{{nav.name}}</a></li>
        </ul>
    </nav>
</template>

<style lang="less">
    @backgroundColor: #333;
    @fontColor: #fff;
    @darkenAmount: 10%;
    @linkMargin: 0 10px;

    .blogHeader{
        background-color: @backgroundColor;
        float: left;
        ul{
            list-style: none;
            li{
                float: left;
                line-height: 1;
                margin: @linkMargin;
                a{
                    text-decoration: none;
                    font-weight: bold;
                    color: darken(@fontColor,@darkenAmount);
                  }
            }
        }
    }
</style>

<script lang="babel">
export default {
    name:"BlogHeader",
    data(){
        return {
            navs:[]
        };
    },
    created(){
        // this.navs = [
        //     { name: "Home", link:"/" },
        //     { name: "Toturial", link: "/toturial" },
        //     { name: "About", link: "/about"}
        // ];
    }
}
</script>
