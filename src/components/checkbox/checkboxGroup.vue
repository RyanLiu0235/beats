<template>
  <div class="be-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  componentName: 'be-checkbox-group',
  data() {
    return {
      ischeckboxGroup: true, // 用来唯一标记当前组件是checkboxGroup组件
      currentValue: this.value
    }
  },
  props: {
    value: {
      type: Array,
      default: []
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    currentValue(val) {
      this.$emit('input', val)
    }
  }
}

</script>
