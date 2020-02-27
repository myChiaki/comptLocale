import { Layout } from './layout'
import Components from './components'

const routes = Object.keys(Components).map(item => {
  return {
    path: '/' + item,
    name: item,
    component: Components[item]
  }
})

export default [
  {
    path: '/',
    component: Layout,
    redirect: {
      name: 'Demo'
    },
    children: [
      ...routes
    ]
  }
]
