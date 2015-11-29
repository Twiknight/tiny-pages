<template>
    <div class="banner">
        <h1>{{$parent.site.title}}</h1>
        <h1><small>{{$parent.site.subtitle}}</small></h1>
    </div>
</template>

<style scoped lang="less">
@backgroundColor :  #333;
@fontColor: #fff;
@darkenAmount: 20%;

.banner {
    background: @backgroundColor;
    padding: 100px 0 ;
    h1 {
        text-align: center;
        color: @fontColor;
        small {
            color: darken(@fontColor, @darkenAmount);
        }
    }
}
</style>

<script lang="babel">
    export default {
        name : 'Banner'
    }
</script>
