<template>
  <div>
    <div>
      <h1>插值</h1>
      <Text1 :msg="'test'"></Text1>
      <RawHtml rawHtml="<span style='color:red'>Red.</span>"></RawHtml>
      <attributes :dynamic-id="'123'"></attributes>
      <js-expression :number="1" :ok="false"></js-expression>
    </div>
    <div>
      <h1>指令</h1>
      <p>v-bind用来绑定参数</p>
      <p>v-on用来监听DOM事件</p>
      <p>v-on:submit.prevent="onSubmit"</p>
      <p>.prevent 修饰符告诉 v-on 指令对于触发的事件调用 event.preventDefault()</p>
      <p>v-bind:xxx可以缩写为:xxx</p>
      <p>v-on:click可以缩写为@click</p>
    </div>
    <div>
      <h1>计算属性</h1>
      <computed-property></computed-property>
      <p></p>
    </div>
  </div>
</template>

<script>
import Text1 from "./example/Text.vue";
import RawHtml from "./example/RawHtml.vue";
import Attributes from "./example/Attributes.vue";
import JsExpression from "./example/JavascriptExpression.vue";
import computedProperty from "./example/computedProperty.vue";

export default {
  name: "Grammer1",
  components: {
    Text1,
    RawHtml,
    Attributes,
    JsExpression,
    computedProperty
  }
};
</script>
