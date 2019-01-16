<template>
  <div>
    <h2># 原始HTML</h2>
    <p>Using mustaches:{{rawHtml}}</p>
    <p>
      Using v-html directive:
      <span v-html="rawHtml"></span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'RawHtml',
  props:{
    rawHtml:String
  }
}
</script>
