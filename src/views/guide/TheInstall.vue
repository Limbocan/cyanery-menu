<template>
  <h2 id="menu-install">安装</h2>
  <p>npm 安装</p>
  <div class="code-box" data-lang="terminal">
    <pre><code>npm install cyanery-menu</code><code>#或者使用cnpm</code><code>cnpm install cyanery-menu</code></pre>
  </div>
  <p>CDN</p>
  <div class="code-box" data-lang="html">
    <pre><code>&lt;script src=&quot;https://unpkg.com/cyanery-menu&quot;&gt;&lt;/script&gt;</code></pre>
  </div>
  <h2 id="menu-use">使用</h2>
  <p>全局注册</p>
  <div class="code-box" data-lang="javascript">
    <pre><code>import CyaneryMenu from 'cyanery-menu'

// app(Vue实例)

app.component('CyMenu', CyaneryMenu)</code></pre>
  </div>
  <p>单独引用</p>
  <div class="code-box" data-lang="javascript">
    <pre><code>import CyaneryMenu from 'cyanery-menu'

components: { CyaneryMenu }</code></pre>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>