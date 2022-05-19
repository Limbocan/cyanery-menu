
<script lang="ts">
import { defineComponent, h, computed } from 'vue'

export default defineComponent({
  props: {
    type: {
      type: String,
      default: 'item'
    },
    class: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    color: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const IconType = computed(() => {
      return {
        item: h(
          'svg',
          { viewBox: '0 0 1024 1024', class: props.class, width: props.width, height: props.height, fill: props.color },
          h(
            'path',
            { d: 'M512 877.714286c-204.8 0-365.714286-160.914286-365.714286-365.714286s160.914286-365.714286 365.714286-365.714286 365.714286 160.914286 365.714286 365.714286-160.914286 365.714286-365.714286 365.714286M512 0C226.742857 0 0 226.742857 0 512s226.742857 512 512 512 512-226.742857 512-512-226.742857-512-512-512m0 365.714286c-80.457143 0-146.285714 65.828571-146.285714 146.285714s65.828571 146.285714 146.285714 146.285714 146.285714-65.828571 146.285714-146.285714-65.828571-146.285714-146.285714-146.285714' }
          )
        ),
        arrow1: h(
          'svg',
          { viewBox: '0 0 1024 1024', class: props.class, width: props.width, height: props.height, fill: props.color  },
          h(
            'path',
            { d: 'M677.888 598.528l-254.464 239.616c-15.872 14.848-38.912 18.944-59.392 11.264-20.48-8.192-33.792-26.624-33.792-47.616V322.56c0-20.992 13.312-39.424 33.792-47.616 6.656-2.56 13.824-4.096 20.992-4.096 14.336 0 28.16 5.12 38.4 15.36l254.464 239.616c10.24 9.728 15.872 23.04 15.872 36.352 0.512 13.824-5.632 26.624-15.872 36.352z' }
          )
        ),
        arrow2: h(
          'svg',
          { viewBox: '0 0 1024 1024', class: props.class, width: props.width, height: props.height, fill: props.color  },
          h(
            'path',
            { d: 'M558.933333 490.666667L384 665.6l59.733333 59.733333 234.666667-234.666666L443.733333 256 384 315.733333l174.933333 174.933334z' }
          )
        ),
        arrow3: h(
          'svg',
          { viewBox: '0 0 1024 1024', class: props.class, width: props.width, height: props.height, fill: props.color  },
          [
            h('path', { d: 'M837.9904 570.0608H124.5696a29.0304 29.0304 0 0 1-29.0304-29.0304V482.9696a29.0304 29.0304 0 0 1 29.0304-29.0304h713.4208z' }),
            h('path', { d: 'M561.3056 808.96l-40.96-40.96a28.928 28.928 0 0 1 0-40.96l215.04-215.04-215.04-215.04a28.9792 28.9792 0 0 1 0-40.96l40.96-40.96a28.9792 28.9792 0 0 1 40.96 0l296.96 296.96-296.96 296.96a28.9792 28.9792 0 0 1-40.96 0z' })
          ]
        )
      }
    })

    return () => IconType.value[props.type]
  },
})
</script>
