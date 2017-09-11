<template>
  <be-button :type="isActive ? 'info' : 'primary'"
    :class="{
      'is-disabled': disabled,
      'is-active': isActive
    }"
    @click.native="handleRadioSelect">{{value}}</be-button>
</template>
<script>
import BeButton from '../button'

export default {
  componentName: 'be-radio-button',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: [String, Number]
  },
  computed: {
    parent() {
      // radio-button组件必然是被radio-group组件包起来的
      // radio-group组件的data里有一个isRadioGroup标识
      let parent = this.$parent
      while (!parent.isRadioGroup) {
        parent = parent.$parent
      }

      return parent
    },
    curValue() {
      return this.parent.currentValue || ''
    },
    isActive() {
      return this.curValue === this.value
    }
  },
  methods: {
    handleRadioSelect() {
      if (!this.disabled) {
        this.parent.currentValue = this.value
      }
    }
  },
  components: {
    BeButton
  }
}

</script>
