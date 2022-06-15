<template>
  <collapse>
    <ul
      v-show="props.open"
      :class="getClassFomat(`menu-list list-child-${props.deep} ${props.open ? 'toggle-open' : 'toggle-close'}`)"
    >
      <template v-for="item in props.child" :key="item">
        <component :is="item" :is-popover="props.isPopover" />
      </template>
    </ul>
  </collapse>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'
import collapse from '../menu-collapse/index.vue'
import { getClassFomat } from 'src/utils/use-style'

const listProps = {
  child: {
    type: Array,
    default: () => []
  },
  // 菜单层级
  deep: {
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
  components: { collapse },
  props: listProps,
  setup(props) {

    return {
      props,
      getClassFomat
    }
  }
})
</script>

<style lang="scss" scoped>

</style>