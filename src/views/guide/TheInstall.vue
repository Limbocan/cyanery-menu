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
  <p>CDN引入</p>
  <div class="code-box" data-lang="javascript">
    <pre><code>&lt;script src=&quot;https://unpkg.com/vue@next&quot;&gt;&lt;/script&gt;

&lt;script src=&quot;https://unpkg.com/cyanery-menu&quot;&gt;&lt;/script&gt;


// 指定版本

&lt;script src=&quot;https://unpkg.com/vue@3.2.36/dist/vue.global.js&quot;&gt;&lt;/script&gt;

&lt;script src=&quot;https://unpkg.com/cyanery-menu@1.1.0/dist/index.full.js&quot;&gt;&lt;/script&gt;

// html
&lt;div id=&quot;app&quot;&gt;
  &lt;div class=&quot;menu-box&quot;&gt;
    &lt;cyan-menu
      :data=&quot;menuData&quot;
      theme=&quot;dark&quot;
    &gt;
    &lt;/cyan-menu&gt;
  &lt;/div&gt;
&lt;/div&gt;

// js
Vue.createApp({
  components: { cyanMenu: cyanMenu.default }, // 组件注册
  data() {
    return {
      menuData: [ // 菜单数据
        {
          name: &#39;菜单一&#39;,
          key: &#39;1&#39;,
          children: [
            {
              name: &#39;菜单一一&#39;,
              key: &#39;1-1&#39;,
            },
            {
              name: &#39;菜单一二&#39;,
              key: &#39;1-2&#39;,
            }
          ]
        },
        {
          name: &#39;菜单二&#39;,
          key: &#39;2&#39;
        }
      ]
    }
  }
}).mount(&quot;#app&quot;)</code></pre>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>