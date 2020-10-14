<template>
    <header>
        <h3>{{ title}}</h3>
    </header>
</template>
<script>
export default {
    data () {
        return {
        title: 'Portfolio of Chacha'
        }
    }
}
</script>
<style scoped>
    header{
        background-color: darkgreen;
        padding:10px;
        height: 50px;
        text-align: center;
        color: darkorchid   ;
    }
</style>