import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes'
import ComptI18n from '@'
import VueI18n from 'vue-i18n'
import EN from '@/locale/lang/en'
import CN from '@/locale/lang/zh_cn'

Vue.config.productionTip = false
Vue.use(VueRouter)

/** 兼容vue-i18n@6.x */
/** 6.x 把Vue.locale移除了 */
Vue.use(VueI18n)

const messages = {
  en: {
    ...EN
  },
  'zh_cn': {
    ...CN
  }
}

const i18n = new VueI18n({
  locale: 'en',
  messages
})

Vue.use(ComptI18n)

/** 兼容vue-i18n@6.x end */


const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
  i18n
}).$mount('#app')
