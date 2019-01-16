<template>
  <div>
    <h2># 文本</h2>
    <span>Message:{{msg}}</span>
    <br>
    <span v-once>Message-Once:{{msg}}</span>
  </div>
</template>

<script>
export default {
    name:'Text1',
    props:{
        msg:String
    }
}
</script>