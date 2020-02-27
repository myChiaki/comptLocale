import defaultLang from './lang/zh_cn'
import Vue from 'vue'
import deepmerge from 'deepmerge'
import Format from './format'

const format = Format(Vue)
let lang = defaultLang
let merged = false
let i18nHandler = function () {
    const vueI18n = Object.getPrototypeOf(this || Vue).$t
		/* 判断是否有使用vue-i18n，vue-i18n@6.x之后被移除了，可改用VueI18n#GetLocaleMessage / VueI18n#setLocaleMessage，
		或使用new VueI18n({ locale: 'en', messages})设置语言包，这里用后者 */
    if (typeof vueI18n === 'function') {
			if (Vue.locale) {
        if (!merged) {
            merged = true
            Vue.locale(
                Vue.config.lang,
                deepmerge(lang, Vue.locale(Vue.config.lang) || {}, {clone: true})
            )
        }
			}
			return vueI18n.apply(this, arguments)
    }
}

// 国际化
export const t = function (path, options) {
    let value = i18nHandler.apply(this, arguments)
    if (value !== null && value !== undefined) return value

    const array = path.split('.')
    let current = lang

    for (let i = 0, len = array.length; i < len; i++) {
        const property = array[i]
        value = current[property]
        if (i === len - 1) return format(value, options) // 处理参数
        if (!value) return ''
        current = value
    }
    return ''
}

export const use = function (l) {
    lang = l || lang
}

export const i18n = function (fn) {
    i18nHandler = fn || i18nHandler
}

export default { use, t, i18n }

