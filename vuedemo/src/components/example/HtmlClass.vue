<template>
  <div>
    <h2># 对象语法</h2>
    <div class="static" :class="{ active: isActive,'text-danger': hasError }">对象语法</div>
    <h2># 数组语法</h2>
    <div :class="[activeClass,errorClass]">数组语法</div>
    <div :class="[isActive?activeClass:'',errorClass]">根据条件判断Class</div>
    <h2># 绑定内联样式</h2>
    <div :style="{}"></div>
    <div :></div>
  </div>
</template>

<script>
export default {
  name: "HtmlClass",
  data() {
    return {
      isActive: true,
      hasError: false,
      activeClass: 'active',
      errorClass: 'text-danger'
    };
  }
};
</script>
