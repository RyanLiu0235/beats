const ctx = '@@clickoutsideContext'

export default {
  bind: (el, binding, vnode) => {
    const documentHandler = function(e) {
      if (!vnode.context || el.contains(e.target)) {
        return false
      }
      if (binding.expression) {
        vnode.context[el[ctx].methodName](e)
      } else {
        el[ctx].bindingFn(e)
      }
    }
    el[ctx] = {
      documentHandler,
      methodName: binding.expression,
      bindingFn: binding.value
    }
    setTimeout(() => {
      document.addEventListener('click', documentHandler)
    }, 0)
  },
  update(el, binding) {
    el[ctx].methodName = binding.expression
    el[ctx].bindingFn = binding.value
  },
  unbind(el) {
    document.removeEventListener('click', el[ctx].documentHandler)
  }
}
