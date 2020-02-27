<template>
<div>Component i18n
  <!-- 无参数 -->
  <p>{{t('cI18n.comptDemo.test')}}</p>
  <!-- 具名参数 -->
  <p>{{t('cI18n.comptDemo.obj', {msg: 'world', name: 'Deer'})}}</p>
  <!-- 具名参数 -->
  <p>{{t('cI18n.comptDemo.obj1', {msg: 'this'})}}</p>
  <!-- 列表格式参数 -->
  <p>{{t('cI18n.comptDemo.list', ['张三', '李四'])}}</p>
  <!-- HTML -->
  <p v-html="t('cI18n.comptDemo.html')"></p>
  <p v-html="t('cI18n.comptDemo.html1', {name: 'Deer'})"></p>
</div>
</template>

<script>
export default {
  name: 'ComptDemo'
}
</script>
