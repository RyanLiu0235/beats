<script>
import { BeOption, BeSelect } from '@'
import doc from 'docs/select.md'

export default {
  name: 'comp-select',
  data() {
    return {
      select1: '张三',
      list1: ['张三', '李四', '王五']
    }
  },
  template: '<div class="comp-demo-wrapper">' + doc + '</div>',
  components: {
    BeOption,
    BeSelect
  }
}

</script>
<style lang="less">
.comp-demo-wrapper {
  .be-select {
    width: 180px;
  }
}

</style>
