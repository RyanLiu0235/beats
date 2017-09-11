<script>
import { BeRadioButton, BeRadioGroup } from '@'
import doc from 'docs/radio.md'

export default {
  name: 'comp-radio',
  data() {
    return {
      radio1: '北京',
      list1: [{
        value: '北京',
        disabled: false
      }, {
        value: '天津',
        disabled: false
      }, {
        value: '上海',
        disabled: false
      }, {
        value: '深圳',
        disabled: true
      }]
    }
  },
  template: '<div class="comp-demo-wrapper">' + doc + '</div>',
  components: {
    BeRadioButton,
    BeRadioGroup
  }
}

</script>
