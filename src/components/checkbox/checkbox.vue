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
          'is-checked': model
        }"></span>
    </span>
    <span class="be-checkbox--label">{{label}}</span>
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
    value: [String, Number, Boolean],
    label: [String, Number]
  },
  computed: {
    // 如果当前组件是被checkbox-group组件包裹的，就会有parent
    // 如果没有就返回undefined
    parent() {
      let parent = this.$parent

      while (!parent.ischeckboxGroup) {
        if (parent.$parent) {
          parent = parent.$parent
        } else {
          return undefined
        }
      }

      return parent
    },
    // 是否有被checkbox-group组件包裹
    isGroup() {
      return this.parent !== undefined
    },
    model: {
      get() {
        if (this.isGroup) {
          return this.parent.currentValue.indexOf(this.label) > -1
        } else {
          return this.value
        }
      },
      set(val) {
        if (!this.disabled) {
          if (this.isGroup) {
            const label = this.label
            if (val) {
              this.parent.currentValue.push(label)
            } else {
              const index = this.parent.currentValue.indexOf(label)
              this.parent.currentValue.splice(index, 1)
            }
          } else {
            this.$emit('input', val)
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
