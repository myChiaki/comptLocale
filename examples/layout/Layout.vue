<template>
  <div>
    <div span="4">
      <ul>
        <li v-for="item in getComponents" :key="item.name">
          <router-link :to="{name: item.path}">{{item.name}}</router-link>
        </li>
      </ul>
    </div>
    <div span="20">
      <div class="layout-wrap">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Components from '../components'
export default {
  name: 'Layout',
  computed: {
    getComponents () {
      return Object.keys(Components).map(item => {
        return {
          name: item,
          path: item
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
  .layout-wrap {
    padding: 30px;
    border: 1px solid #eaeaea;
  }
</style>
