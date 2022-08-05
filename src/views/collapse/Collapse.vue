<template>
  <h1 id="menu-collapse">Collapse组件</h1>
  <p>使用Collapse组件</p>
  <div class="code-box" data-lang="javascript">
    <pre><code>import { Collapse } from 'cyanery-menu'

components: { Collapse }


&lt;Collapse&gt;
  &lt;div v-show=&quot;show&quot;&gt;
    &lt;div v-for=&quot;item in 10&quot;&gt;{{ item }}&lt;/div&gt;
  &lt;/div&gt;
&lt;/Collapse&gt;</code></pre>
  </div>
  <p>
    <strong>插槽：default</strong>
    <br />
    <strong>参数:</strong><code class="value">无</code>
    <br />
    <p>展示类容，设置隐藏可触发收起动画</p>
  </p>
  <p>
    <strong>示例</strong>
    <br />
    <div class="tool-btn" @click="toggle">
      切换
    </div>
    <Collapse>
      <div v-show="show">
        <div v-for="item in 10">{{ item }}</div>
      </div>
    </Collapse>
  </p>
</template>

<script setup>
import { ref } from 'vue'
import { Collapse } from 'cyanery-menu'

const show = ref(false)

const toggle = () => show.value = !show.value

</script>

<style scoped>
.tool-btn {
  margin-top: 12px;
}
</style>