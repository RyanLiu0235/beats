<template>
  <div class="comp-detail-page comp-button-page">
    <div class="comp-title-wrapper"
      v-html="code">
    </div>
  </div>
</template>
<script>
import { BeButton } from '@'
import buttomDoc from 'docs/button.md'

export default {
  name: 'comp-button',
  data() {
    return {
      code: buttomDoc
    }
  },
  components: {
    BeButton
  }
}

</script>
