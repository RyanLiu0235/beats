<template>
  <label class="be-switch"
    :class="{
	  	'is-checked': value
	  }"
    :style="{
    	'width': `${outerWidth}px`
  	}">
    <input class="be-switch--input"
      type="checkbox"
      :value="value"
      :disabled="disabled"
      v-model="model" />
    <span class="be-switch__inner">
      <span class="be-switch--ball"
        ref="ball"></span>
    </span>
    <span class="be-switch--label"
      v-if="hasLabel">
      <transition>
        <span class="be-switch--label-pre"
          v-show="model">{{onLabel}}</span>
      </transition>
      <transition>
        <span class="be-switch--label-post"
          v-show="!model">{{offLabel}}</span>
      </transition>
    </span>
  </label>
</template>
<script>
export default {
  componentName: 'be-switch',
  data() {
    return {
      model: this.value,
      outerWidth: this.width
    }
  },
  props: {
    value: Boolean,
    disabled: Boolean,
    width: {
      type: Number,
      default: 0
    },
    offLabel: [String, Number],
    onLabel: [String, Number]
  },
  computed: {
    hasLabel() {
      return this.offLabel || this.onLabel
    }
  },
  watch: {
    model(val) {
      this.$refs.ball.style.transform = `translateX(${val ? this.outerWidth - 24 : 0}px)`
      this.$emit('input', val)
    }
  },
  mounted() {
    if (this.width === 0) {
      this.outerWidth = this.hasLabel ? 70 : 44
      this.$refs.ball.style.transform = `translateX(${this.model ? this.outerWidth - 24 : 0}px)`
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
  }
  &--ball {
    content: "";
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    left: 0;
    top: 0;
    cursor: pointer;
    transition: transform .2s ease-in-out, width .2s ease-in-out;
  }
  &--label {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    span {
      display: block;
      width: 100%;
      line-height: 22px;
      padding: 0 8px;
      color: #fff;
      font-size: 12px;
      box-sizing: border-box;
    }
    &-post {
      text-align: right;
    }
  }
}

</style>
