<template>
  <div class="be-radio-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  componentName: 'be-radio-group',
  data() {
    return {
      isRadioGroup: true, // 用来唯一标记当前组件是radioGroup组件
      currentValue: this.value
    }
  },
  props: {
    value: {
      type: [String, Number],
      default: '请选择'
    },
    placeholder: String,
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
