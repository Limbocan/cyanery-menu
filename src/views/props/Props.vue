<template>
  <h1 id="menu-props">参数</h1>
  <h2 id="menu-modelValue">modelValue</h2>
  <p>
    <strong>类型:</strong><code class="value">string | undefined</code>
    <br />
    <strong>默认:</strong><code class="value">undefined</code>
    <p>菜单双向绑定当前活跃菜单Key值</p>
  </p>
  <h2 id="menu-data">data</h2>
  <p>
    <strong>类型:</strong><code class="value">Array&lt;MenuItemProps&gt;</code>
    <br />
    <strong>默认:</strong><code class="value">[]</code>
    <p>菜单数据</p>
    <p>MenuItemProps对象参数说明：
      <table>
        <thead>
          <th>参数</th>
          <th>参数类型</th>
          <th>备注</th>
        </thead>
        <tbody>
          <tr>
            <td>name</td>
            <td>string</td>
            <td>菜单项名称</td>
          </tr>
          <tr>
            <td>key</td>
            <td>string</td>
            <td>菜单项key值（需唯一）</td>
          </tr>
          <tr>
            <td>path</td>
            <td>string | null</td>
            <td>菜单项跳转路径（可选），可替代key值</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>boolean</td>
            <td>菜单项是否禁用</td>
          </tr>
          <tr>
            <td>children</td>
            <td>Array&lt;MenuItemProps&gt;</td>
            <td>子菜单数据</td>
          </tr>
        </tbody>
      </table>
    </p>
  </p>
  <h2 id="menu-className">className</h2>
  <p>
    <strong>类型:</strong><code class="value">string</code>
    <br />
    <strong>默认:</strong><code class="value">''</code>
    <p>菜单样式类名</p>
  </p>
  <h2 id="menu-open">open</h2>
  <p>
    <strong>类型:</strong><code class="value">boolean | undefined</code>
    <br />
    <strong>默认:</strong><code class="value">undefined</code>
    <p>双向绑定菜单展开/收起。示例：v-model:open=&quot;true&quot;</p>
  </p>
  <h2 id="menu-width">width</h2>
  <p>
    <strong>类型:</strong><code class="value">string</code>
    <br />
    <strong>默认:</strong><code class="value">'100%'</code>
    <p>菜单宽度（展开时宽度），默认为取父级元素宽度100%</p>
  </p>
  <h2 id="menu-closeWidth">closeWidth</h2>
  <p>
    <strong>类型:</strong><code class="value">string</code>
    <br />
    <strong>默认:</strong><code class="value">''</code>
    <p>菜单收起时的宽度，默认根据不同主题有不同宽度，可设置为0完全隐藏</p>
  </p>
  <h2 id="menu-toggleButton">toggleButton</h2>
  <p>
    <strong>类型:</strong><code class="value">boolean</code>
    <br />
    <strong>默认:</strong><code class="value">false</code>
    <p>展示菜单切换（展开/收起）按钮</p>
  </p>
  <h2 id="menu-unique">unique</h2>
  <p>
    <strong>类型:</strong><code class="value">boolean</code>
    <br />
    <strong>默认:</strong><code class="value">false</code>
    <p>是否保持同级唯一一个子菜单展开</p>
  </p>
  <h2 id="menu-trigger">trigger</h2>
  <p>
    <strong>类型:</strong><code class="value">string</code>
    <br />
    <strong>默认:</strong><code class="value">'click'</code>
    <p>展开菜单方式，可选（hover/其他），为hover时鼠标移入/移出控制菜单展开/收起，为其他值时为手动控制</p>
  </p>
  <h2 id="menu-beforeRouter">beforeRouter</h2>
  <p>
    <strong>类型:</strong><code class="value">function | undefined</code>
    <br />
    <strong>默认:</strong><code class="value">undefined</code>
    <p>活跃菜单（不包含子菜单）切换时拦截方法，函数包含三个参数：
      <div style="margin-left: 50px;">
        <div><strong>from:</strong><code class="value">跳转前菜单key值</code></div>
        <div><strong>to:</strong><code class="value">跳转菜单key值</code></div>
        <div><strong>next:</strong><code class="value">跳转方法（不执行时中断跳转），可传入新的key值修改菜单跳转</code></div>
      </div>
    </p>
  </p>
  <h2 id="menu-showIcon">showIcon</h2>
  <p>
    <strong>类型:</strong><code class="value">boolean</code>
    <br />
    <strong>默认:</strong><code class="value">true</code>
    <p>是否展示菜单图标</p>
  </p>
  <h2 id="menu-offset">offset</h2>
  <p>
    <strong>类型:</strong><code class="value">number</code>
    <br />
    <strong>默认:</strong><code class="value">6</code>
    <p>次级菜单（子菜单）较上级菜单缩进宽度，单位为像素（px）</p>
  </p>
  <h2 id="menu-alwaysPopover">alwaysPopover</h2>
  <p>
    <strong>类型:</strong><code class="value">boolean</code>
    <br />
    <strong>默认:</strong><code class="value">false</code>
    <p>是否始终展示菜单悬浮窗，默认只有菜单收起时鼠标移入展示</p>
  </p>
  <h2 id="menu-arrowType">arrowType</h2>
  <p>
    <strong>类型:</strong><code class="value">string</code>
    <br />
    <strong>默认:</strong><code class="value">'arrow1'</code>
    <p>菜单展开图标，可选（arrow1/arrow2/arrow3）</p>
  </p>
  <h2 id="menu-theme">theme</h2>
  <p>
    <strong>类型:</strong><code class="value">string</code>
    <br />
    <strong>默认:</strong><code class="value">'normal'</code>
    <p>菜单主题样式，可选（normal/primary/dark），传入颜色属性可覆盖默认主题颜色</p>
  </p>
  <h2 id="menu-backgroundColor">backgroundColor</h2>
  <p>
    <strong>类型:</strong><code class="value">string</code>
    <br />
    <strong>默认:</strong><code class="value">''</code>
    <p>菜单背景色，默认为主题配置颜色</p>
  </p>
  <h2 id="menu-activeColor">activeColor</h2>
  <p>
    <strong>类型:</strong><code class="value">string</code>
    <br />
    <strong>默认:</strong><code class="value">''</code>
    <p>菜单活跃颜色，默认为主题配置颜色</p>
  </p>
  <h2 id="menu-textColor">textColor</h2>
  <p>
    <strong>类型:</strong><code class="value">string</code>
    <br />
    <strong>默认:</strong><code class="value">''</code>
    <p>菜单文字颜色，默认为主题配置颜色</p>
  </p>
  <h2 id="menu-activeTextCorlor">activeTextCorlor</h2>
  <p>
    <strong>类型:</strong><code class="value">string</code>
    <br />
    <strong>默认:</strong><code class="value">''</code>
    <p>菜单活跃文字颜色，默认为主题配置颜色</p>
  </p>
  <h2 id="menu-headerRender">headerRender</h2>
  <p>
    <strong>类型:</strong><code class="value">string | (() => VNodeChild)</code>
    <br />
    <strong>默认:</strong><code class="value">''</code>
    <p>菜单头部渲染方法（可用插槽替代）,传入渲染函数（示例：() => h('div', { class: 'header' }, '这是头部')）</p>
    <p>使用插槽：</p>
    <div class="code-box" data-lang="html">
      <pre><code>&lt;template #header=&quot;{ open }&quot;&gt;
    这是头部
&lt;/template&gt;</code></pre>
    </div>
    <p>插槽参数说明：
      <table>
        <thead>
          <th>参数</th>
          <th>参数类型</th>
          <th>备注</th>
        </thead>
        <tbody>
          <tr>
            <td>open</td>
            <td>boolean</td>
            <td>菜单展开/收起状态</td>
          </tr>
        </tbody>
      </table>
    </p>
  </p>
  <h2 id="menu-footerRender">footerRender</h2>
  <p>
    <strong>类型:</strong><code class="value">string | (() => VNodeChild)</code>
    <br />
    <strong>默认:</strong><code class="value">''</code>
    <p>菜单尾部渲染方法（可用插槽替代）,传入渲染函数（示例：() => h('div', { class: 'header' }, '这是尾部')）</p>
    <p>使用插槽：</p>
    <div class="code-box" data-lang="html">
      <pre><code>&lt;template #footer=&quot;{ open }&quot;&gt;
    这是尾部
&lt;/template&gt;</code></pre>
    </div>
    <p>插槽参数说明：
      <table>
        <thead>
          <th>参数</th>
          <th>参数类型</th>
          <th>备注</th>
        </thead>
        <tbody>
          <tr>
            <td>open</td>
            <td>boolean</td>
            <td>菜单展开/收起状态</td>
          </tr>
        </tbody>
      </table>
    </p>
  </p>
  <h2 id="menu-itemRender">itemRender</h2>
  <p>
    <strong>类型:</strong><code class="value">string | (() => VNodeChild)</code>
    <br />
    <strong>默认:</strong><code class="value">''</code>
    <p>菜单项渲染方法（可用插槽替代）,传入渲染函数（示例：({data, active, popover, disabled, open}) => h('div', { class: 'header' }, '这是尾部')）</p>
    <p>使用插槽：</p>
    <div class="code-box" data-lang="html">
      <pre><code>&lt;template #menuItem=&quot;{ data, active, popover, disabled, open }&quot;&gt;
    这是菜单项
&lt;/template&gt;</code></pre>
    </div>
    <p>插槽参数说明：
      <table>
        <thead>
          <th>参数</th>
          <th>参数类型</th>
          <th>备注</th>
        </thead>
        <tbody>
          <tr>
            <td>data</td>
            <td>MenuItemProps</td>
            <td>当前菜单项数据</td>
          </tr>
          <tr>
            <td>active</td>
            <td>boolean</td>
            <td>当前菜单项是否为活跃项</td>
          </tr>
          <tr>
            <td>popover</td>
            <td>boolean</td>
            <td>是否在悬浮窗内</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>boolean</td>
            <td>是否为禁用菜单项</td>
          </tr>
          <tr>
            <td>open</td>
            <td>boolean</td>
            <td>菜单项是否打开状态（有子菜单）</td>
          </tr>
        </tbody>
      </table>
    </p>
  </p>
  <h2 id="menu-iconRender">iconRender</h2>
  <p>
    <strong>类型:</strong><code class="value">string | (() => VNodeChild)</code>
    <br />
    <strong>默认:</strong><code class="value">''</code>
    <p>菜单项图标渲染方法（可用插槽替代）,传入渲染函数（示例：({data, active, deep, disabled, open}) => h('div', { class: 'header' }, '这是尾部')）</p>
    <p>使用插槽：</p>
    <div class="code-box" data-lang="html">
      <pre><code>&lt;template #icon=&quot;{ data, active, deep, disabled, open }&quot;&gt;
    这是菜单图标
&lt;/template&gt;</code></pre>
    </div>
    <p>插槽参数说明：
      <table>
        <thead>
          <th>参数</th>
          <th>参数类型</th>
          <th>备注</th>
        </thead>
        <tbody>
          <tr>
            <td>data</td>
            <td>MenuItemProps</td>
            <td>当前菜单项数据</td>
          </tr>
          <tr>
            <td>active</td>
            <td>boolean</td>
            <td>当前菜单项是否为活跃项</td>
          </tr>
          <tr>
            <td>deep</td>
            <td>boolean</td>
            <td>菜单层级</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>boolean</td>
            <td>是否为禁用菜单项</td>
          </tr>
          <tr>
            <td>open</td>
            <td>boolean</td>
            <td>菜单项是否打开状态（有子菜单）</td>
          </tr>
        </tbody>
      </table>
    </p>
  </p>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>