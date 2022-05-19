
import { defineComponent, h, PropType, computed } from 'vue'
import MenuIcon from '../menu-item/icon.vue'
import { getClassFomat } from 'src/utils/use-style'
// 组件参数
const ToggleProps = {
  modelValue: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  type: {
    type: String as PropType<string>,
    default: ''
  },
}
const ToggleEmits = ['update:modelValue']

// 组件
export const MenuToggleComponent = defineComponent({
  name: 'CyaneryMenuToggle',
  props: ToggleProps,
  emits: ToggleEmits,
  setup(props, { emit }) {

    const status = computed(() => {
      return props.modelValue ? 'is-open' : 'is-close'
    })

    const toggleClick = () => {
      const val = !props.modelValue
      emit('update:modelValue', val)
    }

    return () => h(
      MenuIcon,
      {
        class: getClassFomat('toggle-box ' + status.value),
        type: 'arrow2',
        onClick: () => toggleClick(),
      },
      status.value
    )
  },
})
