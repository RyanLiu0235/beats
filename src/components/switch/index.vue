<template>
  <label class="be-switch"
    :class="{
  	'is-checked': value
  }">
    <input class="be-switch--input"
      type="checkbox"
      :value="value"
      :disabled="disabled"
      v-model="model" />
    <span class="be-switch__inner"></span>
  </label>
</template>
<script>
export default {
  componentName: 'be-switch',
  data() {
    return {
      model: this.value
    }
  },
  props: {
    value: Boolean,
    disabled: Boolean
  },
  watch: {
    model(val) {
      this.$emit('input', val)
    }
  }
}

</script>
<style lang="less">
.be-switch {
	position: relative;
  display: block;
  width: 44px;
  height: 24px;
  border-radius: 22px;
  border: 1px solid #ccc;
  background-color: #ccc;
  position: relative;
  cursor: pointer;
  box-sizing: border-box;
  transition: all .2s ease-in-out;
  &.is-checked {
    border-color: #00a1d6;
    background-color: #00a1d6;
    .be-switch__inner:after {
      transform: translateX(20px);
    }
  }
  &--input {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    opacity: 0;
  }
  &__inner {
  	position: relative;
  	display: block;
  	height: 24px;
    &:after {
      content: "";
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background-color: #fff;
      position: absolute;
      left: 0;
      top: 0;
      cursor: pointer;
      transform: translateX(0);
      transition: transform .2s ease-in-out, width .2s ease-in-out;
    }
  }
}

</style>
