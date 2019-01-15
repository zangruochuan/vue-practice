<template>
    <div>
        
        <span>Message:{{msg}}</span><br>
        <span v-once>Message-Once:{{msg}}</span>

        
    </div>
</template>

<script>
export default {
    name:'Grammer1',
    props:{
        msg: String
    }
}
</script>
