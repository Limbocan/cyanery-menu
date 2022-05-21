<template>
  <h1 id="menu-example">示例</h1>
  <div class="tool-btn" @click="closeMenu">
    关闭所有菜单
  </div>
  <p>
    <strong>当前菜单：{{ active }}</strong>
  </p>
  <div class="example">
    <CyMenu
      ref="CyMenuRef"
      v-model="active"
      v-model:open="open"
      :unique="unique"
      :trigger="trigger"
      :data="menuData"
      :toggle-button="toggleButton"
      :show-icon="showIcon"
      :theme="theme"
      :arrow-type="arrowType"
      :backgroundColor="bgColor"
      :active-color="activeColor"
      :textColor="textColor"
      :always-popover="alwaysPopover"
      :active-text-corlor="activeTextCorlor"
      :offset="offset"
      :close-width="closeWidth"
      width="240px"
      @menu-click="menuClick"
    />
    <div class="tools">
      <fieldset>
        <strong>主题</strong>
        <label>
          <div class="radio">
            <label v-for="item in themeList" :key="item" class="radio-label" @click="changeTheme(item)">
              <input :checked="item === theme" type="radio" name="theme" class="radio-input" />
              <span class="radio-text">{{ item }}</span>
            </label>
          </div>
        </label>
        <br />
        <strong>触发方式</strong>
        <label>
          <div class="radio">
            <label v-for="item in triggerList" :key="item" class="radio-label" @click="changeTrigger(item)">
              <input :checked="item === trigger" type="radio" name="trigger" class="radio-input" />
              <span class="radio-text">{{ item }}</span>
            </label>
          </div>
        </label>
        <br />
        <strong>展开箭头图标</strong>
        <label>
          <div class="radio">
            <label v-for="item in arrowTypeList" :key="item" class="radio-label" @click="changeArrowType(item)">
              <input :checked="item === arrowType" type="radio" name="arrowType" class="radio-input" />
              <span class="radio-text">{{ item }}</span>
            </label>
          </div>
        </label>
        <br />
        <strong>{{ open ? '展开' : '收起' }}</strong>
        <label>
          <input v-model="open" type="checkbox">
        </label>
        <br />
        <strong>保持一个子菜单的展开</strong>
        <label>
          <input v-model="unique" type="checkbox">
        </label>
        <br />
        <strong>始终展示菜单浮窗</strong>
        <label>
          <input v-model="alwaysPopover" type="checkbox">
        </label>
        <br />
        <strong>展示图标</strong>
        <label>
          <input v-model="showIcon" type="checkbox">
        </label>
        <br />
        <strong>展示菜单切换按钮</strong>
        <label>
          <input v-model="toggleButton" type="checkbox">
        </label>
        <br />
        <br />
        <br />
        <br />
        <br />
        <strong>背景色</strong>
        <label>
          <input v-model="bgColor" type="color" />
        </label>
        <br />
        <strong>主题色</strong>
        <label>
          <input v-model="activeColor" type="color" />
        </label>
        <br />
        <strong>文字颜色</strong>
        <label>
          <input v-model="textColor" type="color" />
        </label>
        <br />
        <strong>主题文字颜色</strong>
        <label>
          <input v-model="activeTextCorlor" type="color" />
        </label>
        <br />
        <strong>菜单缩进</strong>
        <label>
          <input v-model="offset" type="number" min="0" max="20" />
        </label>
        <br />
        <strong>菜单收起宽度</strong>
        <label>
          <input v-model="closeWidth" type="number" min="0" max="200" />
        </label>
      </fieldset>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const CyMenuRef = ref(null)
const active = ref('')
const open = ref(true)
const unique = ref(false)
const alwaysPopover = ref(false)
const showIcon = ref(true)
const toggleButton = ref(false)
const offset = ref(6)
const closeWidth = ref('')
const theme = ref('dark')
const themeList = ['normal', 'primary', 'dark']
const trigger = ref('click')
const triggerList = ['click', 'hover']
const arrowType = ref('arrow1')
const arrowTypeList = ['arrow1', 'arrow2', 'arrow3']
const bgColor = ref('')
const activeColor = ref('')
const textColor = ref('')
const activeTextCorlor = ref('')
const menuData = ref([
  {
    name: '菜单一',
    key: '1',
    path: '1',
  },
  {
    name: '菜单二',
    key: '2',
    path: '2',
    children: [
      {
        name: '菜单二一',
        key: '21',
        path: '21',
      },
      {
        name: '菜单二二',
        key: '22',
        path: '22',
      }
    ]
  },
  {
    name: '菜单三',
    key: '3',
    path: '3',
    children: [
      {
        name: '菜单三一',
        key: '31',
        path: '31',
      },
      {
        name: '菜单三二',
        key: '32',
        path: '32',
        children: [
          {
            name: '菜单三二一',
            key: '321',
            path: '321',
          },
          {
            name: '菜单三二二',
            key: '322',
            path: '322',
          }
        ]
      }
    ]
  },
  {
    name: '菜单四',
    key: '4',
    path: '4',
  },
  {
    name: '菜单五',
    key: '5',
    path: '5',
    children: [
      {
        name: '菜单五一',
        key: '51',
        path: '51',
      }
    ]
  },
])
const changeTheme = (val) => theme.value = val
const changeTrigger = (val) => trigger.value = val
const changeArrowType = (val) => arrowType.value = val

const menuClick = () => {}
const closeMenu = () => CyMenuRef.value.closeAll()

</script>

<style lang="scss" scoped>

</style>