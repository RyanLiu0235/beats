<template>
  <div class="be-select"
    :class="{
      'be-select-open': isOpen,
      'is-disabled': disabled
    }"
    v-clickoutside="hide">
    <be-input :readonly="true"
      @click.native="handleStretch"
      v-model="currentValue"
      :disabled="disabled"
      :placeholder="placeholder">
      <button class="be-select-arrow icon icon-arrow"
        slot="append"></button>
    </be-input>
    <transition name="stretch">
      <ul class="be-option-group"
        v-show="isOpen">
        <slot></slot>
      </ul>
    </transition>
  </div>
</template>
<script>
import BeInput from '../input/index'
import clickoutside from '../../utils/clickoutside'

export default {
  componentName: 'be-select',
  data() {
    return {
      isSelect: true, // 用来唯一标记当前组件是select组件
      isOpen: false,
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
  },
  methods: {
    handleStretch() {
      if (!this.disabled) {
        this.isOpen = !this.isOpen
      }
    },
    hide() {
      this.isOpen = false
    }
  },
  components: {
    BeInput
  },
  directives: {
    clickoutside
  }
}

</script>
<style lang="less">
.stretch-enter-active,
.stretch-leave-active {
  transition: transform .3s, opacity .3s;
  transform-origin: top;
}

.stretch-enter,
.stretch-leave-to {
  transform: scaleY(0);
  opacity: 0;
}

.be-select {
  position: relative;
  &-arrow {
    position: absolute;
    top: 0;
    right: 0;
    display: inline-block;
    outline: none;
    -webkit-appearance: button;
    cursor: pointer;
    border: 1px solid #ccd0d7;
    border-left: none;
    border-radius: 0 4px 4px 0;
    margin-left: -1px;
  }
  .be-input {
    width: 100%;
  }
  .be-option-group {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    width: 100%;
    margin-top: 5px;
    padding: 10px 0;
    border-radius: 4px;
    border: 1px solid #ccd0d7;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    background: #fff;
    overflow: hidden;
  }
}

</style>
