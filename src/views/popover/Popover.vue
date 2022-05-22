<template>
  <h1 id="menu-popover">Popover浮窗</h1>
  <p>Popover可作为单独组件引入使用</p>
  <div class="code-box" data-lang="javascript">
    <pre><code>import { Popover } from 'cyanery-menu'

components: { Popover }</code></pre>
  </div>
  <p>
    <strong>参数：disabled</strong>
    <br />
    <strong>类型:</strong><code class="value">boolean</code>
    <br />
    <strong>默认:</strong><code class="value">false</code>
    <p>是否禁用</p>
  </p>
  <p>
    <strong>插槽：default/trigger</strong>
    <br />
    <strong>参数:</strong><code class="value">无</code>
    <br />
    <p>触发浮窗的内容</p>
  </p>
  <p>
    <strong>插槽：content</strong>
    <br />
    <strong>参数:</strong><code class="value">无</code>
    <br />
    <p>浮窗内容</p>
  </p>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>