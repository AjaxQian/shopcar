<template>
    <div class="home-container">
        <h1>{{msg}}</h1>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: '这是shopcar组件'
            }
        }
    }
</script>

<style lang="less" scoped>
    .home-container {
        h1 {
            font-size: 20px;
            color: red;
        }
    }
</style>
