<template>
    <div id="wrapper">
        <!--header-->
        <blogHeader></blogHeader>
        <router-view></router-view>
    </div>
</template>

<script>
import BlogHeader from "./blogHeader.vue";
import Vue from "vue";

export default{
    name:"App",
    components: {
        BlogHeader
    }
}
</script>
