<template>
  <transition name="collapse" v-on="listeners">
    <ul
      v-show="props.open"
      :class="getClassFomat(`menu-list list-child-${props.diff} ${props.open ? 'toggle-open' : 'toggle-close'}`)"
    >
      <template v-for="item in props.child" :key="item">
        <component :is="item" :is-popover="props.isPopover" />
      </template>
    </ul>
  </transition>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'
import { getClassFomat } from 'src/utils/use-style'

const listProps = {
  child: {
    type: Array,
    default: () => []
  },
  // 菜单层级
  diff: {
    type: Number as PropType<number>,
    default: 0
  },
  // 菜单展开(true)/收起(false)
  open: {
    type: Boolean || undefined as PropType<boolean | undefined>,
    default: undefined
  },
  // 是否为浮窗内列表
  isPopover: {
    type: Boolean || undefined as PropType<boolean | undefined>,
    default: undefined
  }
}

export default defineComponent({
  props: listProps,
  setup(props) {

    const listeners = {
      beforeEnter(el) {
        if (!el.dataset) el.dataset = {}
        el.dataset.oldPaddingTop = el.style.paddingTop
        el.dataset.oldPaddingBottom = el.style.paddingBottom
        el.style.maxHeight = 0
        el.style.paddingTop = 0
        el.style.paddingBottom = 0
      },
      enter(el) {
        el.dataset.oldOverflow = el.style.overflow
        if (el.scrollHeight !== 0) {
          el.style.maxHeight = `${el.scrollHeight}px`
          el.style.paddingTop = el.dataset.oldPaddingTop
          el.style.paddingBottom = el.dataset.oldPaddingBottom
        } else {
          el.style.maxHeight = 0
          el.style.paddingTop = el.dataset.oldPaddingTop
          el.style.paddingBottom = el.dataset.oldPaddingBottom
        }
        el.style.overflow = 'hidden'
      },
      afterEnter(el) {
        el.style.maxHeight = ''
        el.style.overflow = el.dataset.oldOverflow
      },
      beforeLeave(el) {
        if (!el.dataset) el.dataset = {}
        el.dataset.oldPaddingTop = el.style.paddingTop
        el.dataset.oldPaddingBottom = el.style.paddingBottom
        el.dataset.oldOverflow = el.style.overflow
        el.style.maxHeight = `${el.scrollHeight}px`
        el.style.overflow = 'hidden'
      },
      leave(el) {
        if (el.scrollHeight !== 0) {
          el.style.maxHeight = 0
          el.style.paddingTop = 0
          el.style.paddingBottom = 0
        }
      },
      afterLeave(el) {
        el.style.maxHeight = ''
        el.style.overflow = el.dataset.oldOverflow
        el.style.paddingTop = el.dataset.oldPaddingTop
        el.style.paddingBottom = el.dataset.oldPaddingBottom
      },
    }

    return {
      listeners,
      props,
      getClassFomat
    }
  }
})
</script>

<style lang="scss" scoped>

</style>