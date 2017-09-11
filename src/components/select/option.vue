<template>
  <li class="be-option"
    :class="{'is-disabled': disabled}"
    :title="name"
    @click="handleOptionSelect">
    <span>{{name}}</span>
  </li>
</template>
<script>
export default {
  componentName: 'be-option',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: [String, Number],
      default: '请选择'
    }
  },
  computed: {
    parent() {
      // option组件必然是被select组件包起来的
      // select组件的data里有一个isSelect标识
      let parent = this.$parent
      while (!parent.isSelect) {
        parent = parent.$parent
      }

      return parent
    }
  },
  methods: {
    handleOptionSelect() {
      if (!this.disabled) {
        this.parent.currentValue = this.name
        this.parent.isOpen = false
      }
    }
  }
}

</script>
<style lang="less">
.be-option {
  width: 100%;
  height: 30px;
  line-height: 30px;
  padding: 0 12px;
  font-size: 14px;
  color: #222;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  box-sizing: border-box;
  &:hover {
    background: #e5e9ef;
    color: #00a1d6;
  }
  &.is-disabled {
    background-color: #f1f1f1;
    color: #99a2aa;
    cursor: not-allowed;
    &:hover {
      background-color: #f1f1f1;
      color: #99a2aa;
    }
  }
}

</style>
