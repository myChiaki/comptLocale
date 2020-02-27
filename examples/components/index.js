const list = {}
const context = require.context('./', false, /.vue$/)

context.keys().forEach(key => {
  const content = context(key).default
  list[content.name] = content
})

export default {
  ...list
}
