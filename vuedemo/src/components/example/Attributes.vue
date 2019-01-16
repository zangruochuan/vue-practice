<template>
  <div>
    <h2># 特性</h2>
    <div v-bind:id="dynamicId">id</div>
  </div>
</template>

<script>
export default {
  name: "Attributes",
  props: {
    dynamicId: String
  }
};
</script>