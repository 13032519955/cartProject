<template>
    <div class="point">
        {{txt}}
    </div>
</template>

<script>
    export default {
        name:"point",
        props:{
            txt:{
                type:String,
                default:"弹出框"
            }
        }
    }
</script>

<style>
    .point{
        width:80px;height:80px;
        background:rgba(0,0,0,.8);
        position:fixed;top:50%;left:50%;
        transform:translate(-50%,-50%);
        color:#fff;border-radius:10px;
        text-align:center;line-height:80px;
        font-size:30px;
    }
</style>
