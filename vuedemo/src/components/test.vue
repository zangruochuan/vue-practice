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
      <p>计算属性vs方法</p>
      <p>方法每次调用都要计算，计算属性会缓存计算结果，只有相关依赖发生改变时才重新计算</p>
      <p>计算属性vs侦听属性</p>
      <p>侦听属性可以监控指定的属性，当该属性发生变动时，执行预定的逻辑，可以实现与计算属性相似的功能，这两种属性需要根据使用场景灵活使用</p>
      <p>举例:fullname = firstname + lastname</p>
      <p>侦听属性的关注点在firstname和lastname上，而计算属性的关注点是fullname</p>
      <p>代码示例：</p>
      <pre>
侦听属性
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  }
})
      </pre>
      <pre>
  计算属性
  var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
})
      </pre>
      <p>计算属性默认只有getter，需要时也可以提供一个setter</p>
      <pre>
  计算属性的setter可以反向更新计算属性所用到的变量
  computed: {
  fullName: {
    // getter
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
      </pre>
      <p>在数据变化时执行异步或者开销较大的操作时，watch提供的方法更适合这种场景</p>
    </div>
    <div>
      <h1>Class与Style绑定</h1>
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

<style scoped>
pre {
  text-align: left;
}
</style>
