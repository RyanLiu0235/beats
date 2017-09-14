<template>
  <label class="be-checkbox"
    :class="{
      'is-disabled': disabled
    }">
    <span class="be-checkbox--input">
      <input type="checkbox"
        class="be-checkbox__original" 
        :value="value"
        :disabled="disabled"
        v-model="model" />
      <span class="be-checkbox__inner"
        :class="{
          'is-checked': isActive
        }"></span>
    </span>
    <span class="be-checkbox--label">{{value}}</span>
  </label>
</template>
<script>
export default {
  componentName: 'be-checkbox',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: [String, Number]
  },
  computed: {
    parent() {
      // checkbox组件必然是被checkbox-group组件包起来的
      // checkbox-group组件的data里有一个ischeckboxGroup标识
      let parent = this.$parent
      while (!parent.ischeckboxGroup) {
        parent = parent.$parent
      }

      return parent
    },
    isActive() {
      return this.model
    },
    model: {
      get() {
        return this.parent.currentValue.indexOf(this.value) > -1
      },
      set(val) {
        if (!this.disabled) {
          const value = this.value
          if (val) {
            this.parent.currentValue.push(value)
          } else {
            const index = this.parent.currentValue.indexOf(value)
            this.parent.currentValue.splice(index, 1)
          }
        }
      }
    }
  }
}

</script>
<style lang="less">
.be-checkbox {
  position: relative;
  display: inline-block;
  white-space: nowrap;
  height: 20px;
  font-size: 0;
  cursor: pointer;
  &+.be-checkbox {
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
    border-radius: 4px;
    transition: all 0.2s cubic-bezier(0.78, 0.14, 0.15, 0.86);
    box-sizing: border-box;
    &.is-checked {
      background: #00a1d6;
      border-color: #00a1d6;
      &:after {
        transform: scale(1) rotate(45deg);
        opacity: 1;
      }
    }
    &:after {
      position: absolute;
      content: '';
      top: 2px;
      left: 5px;
      width: 4px;
      height: 8px;
      background: #00a1d6;
      opacity: 0;
      border: 2px solid #fff;
      border-top-width: 0;
      border-left-width: 0;
      transform: scale(0) rotate(45deg);
      transition: all 0.2s cubic-bezier(0.78, 0.14, 0.15, 0.86);
    }
  }
}

</style>
