<template>
  <button class="be-button"
    :class="
    [`be-button--${type}`, 
      disabled && 'is-disabled'
    ]
    ">
    <span class="be-button_text"><slot></slot></span>
  </button>
</template>
<script>
export default {
  componentName: 'be-button',
  props: {
    type: {
      type: String,
      default: 'primary',
      // primary: 白底 | info: 蓝底 | text: 灰底
      validator: val => ['primary', 'info', 'text'].indexOf(val) > -1
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}

</script>
<style lang="less">
.be-button {
  position: relative;
  display: inline-block;
  height: 32px;
  line-height: 32px;
  padding: 0 16px;
  border-radius: 16px;
  cursor: pointer;
  font-size: 0;
  outline: none;
  border: none;
  white-space: nowrap;
  transition: background-color .2s ease, color .2s ease;
  &.is-disabled {
    cursor: not-allowed;
  }
  &&--text {
    color: #333;
    background-color: #fff;
    &:hover {
      background-color: darken(#fff, 5%);
    }
  }
  &&--info {
    color: #fff;
    background-color: #37c8f7;
    &:hover {
      background-color: darken(#37c8f7, 5%);
    }
  }
  &&--primary {
    color: #6d757a;
    background-color: #f1f3f7;
    &:hover {
      background-color: darken(#f1f3f7, 5%);
    }
  }
  &_text {
    display: inline-block;
    font-size: 12px;
    vertical-align: middle;
  }
}

</style>
