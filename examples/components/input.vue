<script>
import { BeInput } from '@'
import doc from 'docs/input.md'

export default {
  name: 'comp-input',
  data() {
    return {
      input1: '来一段freestyle'
    }
  },
  template: '<div class="comp-demo-wrapper">' + doc + '</div>',
  components: {
    BeInput
  }
}

</script>
<style lang="less">
.comp-demo-wrapper {
  .be-input {
    width: 180px;
  }
  .be-textarea {
    width: 380px;
  }
}

</style>
