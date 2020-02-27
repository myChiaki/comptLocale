<template>
  <div>
    <button @click="handleChangeLang">
      切换中英文
    </button>
    <compt-demo></compt-demo>
    {{$t('demo1.testDemo')}}
    </div>
</template>

<script>
import Vue from 'vue'
import EN from '@/locale/lang/en'
import CN from '@/locale/lang/zh_cn'
import i18nData from './i18n'
export default {
  name: 'Demo',
  created () {
    Object.keys(i18nData).forEach((key) => {
      this.$i18n.mergeLocaleMessage(key, i18nData[key]) // 6.x新增属性
    })
  },
  methods: {
    handleChangeLang () {
      this.$i18n.locale = this.$i18n.locale === 'en' ? 'zh_cn': 'en'
    }
  }
}
</script>

<style scoped>

</style>
