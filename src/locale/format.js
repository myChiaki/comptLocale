const RE_NAMES = /(%|)\{([0-9a-zA-Z_]+)\}/g // %{msg} || {msg}

export default function (Vue) {
    function hasOwn (obj, key) {
        return Object.prototype.hasOwnProperty.call(obj, key) // 判断对象是否包含特定的自身（非继承）属性
    }

    function template (string, ...args) {
        if (args.length === 1 && typeof args[0] === 'object') { // $t('message.hello', {msg: 'hello'})
            args = args[0]
        }

        if (!args || !args.hasOwnProperty) {
            args = {}
        }

        return string.replace(RE_NAMES, (match, $1, $2, index) => { // match 匹配的字符串
            let result
            if (string[index - 1] === '{' && string[index + match.length] === '}') { // {{message}} -> {message} 带有大括号的字符串
                return $2
            } else {
                result = hasOwn(args, $2) ? args[$2] : null
                if (result === null || result === undefined) {
                    return ''
                }
                return result
            }
        })
    }

    return template
}
