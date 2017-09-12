<template>
  <label class="be-radio"
    :class="{
      'is-disabled': disabled
    }">
    <span class="be-radio--input">
      <input type="radio"
        class="be-radio__original" 
        :value="value"
        v-model="model" />
      <span class="be-radio__inner"
        :class="{
          'is-checked': isActive
        }"></span>
    </span>
    <span class="be-radio--label">{{value}}</span>
  </label>
</template>
<script>
export default {
  componentName: 'be-radio',
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
          this.parent.$emit('input', val)
        }
      }
    }
  }
}

</script>
<style lang="less">
.be-radio {
  position: relative;
  display: inline-block;
  white-space: nowrap;
  height: 20px;
  font-size: 0;
  cursor: pointer;
  &+.be-radio {
    margin-left: 15px;
  }
  &--input {
    position: relative;
    display: inline-block;
    line-height: 1;
    vertical-align: middle;
  }
  &--label {
    display: inline-block;
    position: relative;
    font-size: 14px;
    line-height: 18px;
    margin-left: 4px;
    vertical-align: middle;
  }
  &__original {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    opacity: 0;
  }
  &__inner {
    position: relative;
    display: block;
    width: 18px;
    height: 18px;
    background: #fff;
    border: 1px solid #ccd0d7;
    border-radius: 50%;
    transition: all 0.2s cubic-bezier(0.78, 0.14, 0.15, 0.86);
    box-sizing: border-box;
    &.is-checked {
      border-color: #00a1d6;
      &:after {
        background: #00a1d6;
        border-color: #00a1d6;
        transform: scale(1);
        opacity: 1;
      }
    }
    &:after {
      position: absolute;
      content: '';
      top: 4px;
      left: 4px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      transform: scale(0);
      opacity: 0;
      transition: all 0.2s cubic-bezier(0.78, 0.14, 0.15, 0.86);
    }
  }
}

</style>
