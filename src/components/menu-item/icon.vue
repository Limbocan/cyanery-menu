
<script lang="ts">
import { defineComponent, h } from 'vue'

export default defineComponent({
  setup() {

    return () => h(
      'div',
      { class: '111' },
      null
    )
  },
})
</script>
