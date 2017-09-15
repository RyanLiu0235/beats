<script>
import { BeSwitch } from '@'
import doc from 'docs/switch.md'

export default {
  name: 'comp-switch',
  data() {
    return {
      switcher: true
    }
  },
  template: '<div class="comp-demo-wrapper">' + doc + '</div>',
  components: {
    BeSwitch
  }
}

</script>
