<template>
  <div :class="{
    'be-input': type === 'input',
    'be-textarea': type === 'textarea',
    'is-diabled': disabled,
    'be-input--append': $slots.append || count
    }">
    <input class="be-input_inner"
      v-if="type === 'input'"
      v-bind="$props"
      :value="currentValue"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      :maxlength="MaxLength" />
    <textarea class="be-textarea_inner"
      v-if="type === 'textarea'"
      v-bind="$props"
      :value="currentValue"
      :rows="rows"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      :maxlength="MaxLength"></textarea>
    <div class="word-counter"
      v-if="count">{{currentValue.length}}/{{MaxLength}}</div>
    <slot v-if="$slots.append"
      name="append"></slot>
  </div>
</template>
<script>
export default {
  name: 'be-input',
  data() {
    return {
      currentValue: this.value
    }
  },
  props: {
    // 初始值
    value: {
      type: [String, Number],
      default: ''
    },
    // input textarea
    type: {
      type: String,
      default: 'input'
    },
    // 只对textarea生效，控制有多少行
    rows: {
      type: Number,
      default: 4
    },
    // 是否失效
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: '请输入内容'
    },
    maxlength: Number,
    required: Boolean,
    count: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    value(val) {
      this.currentValue = val
    }
  },
  computed: {
    MaxLength() {
      let temp = 0

      switch (this.type) {
        case 'input':
        default:
          temp = 20
          break
        case 'textarea':
          temp = 250
          break
      }
      return temp
    }
  },
  methods: {
    handleInput(e) {
      this.currentValue = e.target.value
      this.$emit('input', this.currentValue)
    },
    handleFocus(e) {
      this.$emit('focus', e)
    },
    handleBlur(e) {
      this.$emit('blur', e)
    }
  }
}

</script>
<style lang="less"
  scoped>
.be-input {
  position: relative;
  color: #222;
  font-size: 14px;
  border-radius: 4px;
  &--append {
    .be-input_inner {
      padding: 5px 60px 5px 12px;
    }
  }
  &_inner {
    display: block;
    width: 100%;
    height: 36px;
    line-height: 1;
    padding: 5px 12px;
    border-radius: 4px;
    border: 1px solid #ccd0d7;
    outline: none;
    box-sizing: border-box;
  }
  &.is-diabled {
    .be-input_inner {
      background-color: darken(#fff, 10%);
      border-color: darken(#ccd0d7, 10%);
      color: lighten(#222, 10%);
      cursor: not-allowed;
    }
  }
}

.be-textarea {
  position: relative;
  color: #222;
  font-size: 14px;
  border-radius: 4px;
  &:hover {
    .word-counter {
      opacity: 1;
    }
  }

  &.is-diabled {
    .be-textarea_inner {
      background-color: darken(#fff, 10%);
      border-color: darken(#ccd0d7, 10%);
      color: lighten(#222, 10%);
      cursor: not-allowed;
    }
  }

  &--append {
    .be-textarea_inner {
      display: table-cell;
    }
  }

  &_inner {
    display: block;
    width: 100%;
    line-height: 1.5;
    padding: 5px 12px;
    border-radius: 4px;
    border: 1px solid #ccd0d7;
    outline: none;
    box-sizing: border-box;
  }

  .word-counter {
    opacity: 0;
    transition: .2s ease opacity;
  }
}

.word-counter {
  position: absolute;
  right: 0;
  bottom: 0;
  height: 36px;
  min-width: 40px;
  padding: 0 10px;
  line-height: 36px;
  text-align: center;
  font-size: 12px;
  color: #99a2aa;
  border-radius: 4px;
}

</style>
