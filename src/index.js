import ComptDemo from './components/ComptDemo'
import locale from './locale'

const components = [ComptDemo]

const install = (Vue, opts = {}) => {
  locale.use(opts.locale) // 设置语言包
  locale.i18n(opts.i18n) // 设置翻译函数i18n
  Vue.prototype.t = locale.t

  components.forEach(component => {
    Vue.component(component.name, component);
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}

export {
  ComptDemo,
  locale
}