<template>
    <div>
        <p>O Msg:{{message}}</p>
        <p>R Msg:{{reversedMessage}}</p>
    </div>
</template>

<script>
export default {
    name:'computedProperty',
    data() {
        return {
            message:'Hello'
        }
    },
    computed: {
        reversedMessage:function(){
            return this.message.split('').reverse().join('')
        }
    },
}
</script>