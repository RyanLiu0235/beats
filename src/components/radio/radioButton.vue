<template>
  <label class="be-radio-button">
    <input type="radio"
      class="be-radio__original"
      :value="value"
      v-model="model" />
    <span class="be-radio-button__inner"
      :class="{
        'is-disabled': disabled,
        'is-checked': isActive
      }">{{value}}</span>
  </label>
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
    isActive() {
      return this.model === this.value
    },
    model: {
      get() {
        return this.parent.currentValue
      },
      set(val) {
        if (!this.disabled) {
          this.parent.currentValue = val
        }
      }
    }
  },
  components: {
    BeButton
  }
}

</script>
<style lang="less">
.be-radio-button {
  position: relative;
  display: inline-block;
  white-space: nowrap;
  cursor: pointer;
  &+.be-radio {
    margin-left: 15px;
  }
  &__inner {
    position: relative;
    display: inline-block;
    height: 32px;
    line-height: 32px;
    padding: 0 16px;
    border-radius: 16px;
    cursor: pointer;
    font-size: 14px;
    color: #333;
    background-color: #fff;
    outline: none;
    border: none;
    white-space: nowrap;
    transition: background-color .2s ease,
    color .2s ease;
    &:hover {
      background-color: darken(#fff, 5%);
    }
    &.is-disabled {
      cursor: not-allowed;
    }
    &.is-checked {
      color: #fff;
      background-color: #37c8f7;
      &:hover {
        background-color: darken(#37c8f7, 5%);
      }
    }
    &&.is-disabled {
      color: #6d757a;
      background-color: #f1f3f7;
      &:hover {
        background-color: #f1f3f7;
      }
    }
  }
}

</style>
