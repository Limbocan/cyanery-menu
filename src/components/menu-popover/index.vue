<template>
  <div
    @mouseenter="mouseenter"
    @mouseleave="mouseleave"
  >
    <slot name="trigger" />
    <slot name="default" />
  </div>
  <transition name="popover">
    <div
      v-show="popover.show"
      :class="getClassFomat('popover')"
      :style="popoverStyle"
      @mouseenter="popMouseenter"
      @mouseleave="popmouseleave"
    >
      <div
        :class="getClassFomat('popover-tip')"
        :style="getStyleFormat([{ prop: 'gap', val: popover.gap, type: 'num' }])"
      />
      <div
        ref="popoverContRef"
        :class="getClassFomat('popover-content')"
      >
        <slot name="content" />
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { ref, computed, nextTick } from 'vue'
import { getClassFomat, getStyleFormat } from '../../utils/use-style'

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  }
})
// 浮窗
const initGap = 10
const popover = ref({
  show: false,
  stopClose: false,
  x: 0,
  y: 0,
  gap: initGap
})
const popoverContRef = ref(null)

const popoverStyle = computed(() => {
  return getStyleFormat([
    { prop: 'popover-x', val: popover.value.x, type: 'num' },
    { prop: 'popover-y', val: popover.value.y, type: 'num' }
  ])
})

// 关闭悬浮窗
const closePopover = () => {
  setTimeout(() => {
    if (!popover.value.stopClose) popover.value.show = false
  }, 300)
}

// 鼠标移入菜单项
const mouseenter = (e) => {
  if (props.disabled) return false
  const { right, top } = e.target.getBoundingClientRect()
  popover.value.x = right
  popover.value.y = top
  popover.value.show = true
  popover.value.stopClose = true
  nextTick(() => {
    const gap = popoverContRef.value.offsetHeight + top - document.body.clientHeight
    if (gap > 0) {
      const topGap = top - gap
      const topEable = topGap < 0
      popover.value.y = topEable ? 0 : top - gap
      popover.value.gap = topEable ? initGap + top : initGap + gap
    } else popover.value.gap = initGap
  })
}

// 鼠标移出菜单项
const mouseleave = () => {
  popover.value.stopClose = false
  closePopover()
}

const popMouseenter = () => {
  popover.value.stopClose = true
}

const popmouseleave = () => {
  popover.value.stopClose = false
  closePopover()
}

</script>