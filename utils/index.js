export const formatNumber = (n) => {
	const str = n.toString()
	return str[1] ? str : `0${str}`
}

// 过滤表情
export const filterEmoji = (name) => {
  const str = name.replace(/[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/ig, "");
  return str
}

export const filterSpace = (name) => {
  const str = name.replace(/\s+/g, '')
  return str
}

// 简陋版屏蔽二次点击事件重复触发
export const debounceEvent = (fn, wait = 500) => {
  let timer = null
  return function() {
    var context = this
    var args = arguments
    if (timer) return
    fn.apply(context, args);
    timer = setTimeout(() => {
      timer = null
      clearTimeout(timer)
    }, wait)
  }
}

// 定义一个深拷贝函数  接收目标target参数
export const deepClone = (source) => {
  if (!isObject(source)) return source //如果不是对象的话直接返回
  let target = Array.isArray(source) ? [] : {} //数组兼容
  for (var key in source) {
    if (source.hasOwnProperty(key)) {
      if (typeof source[key] === 'object') {
            target[key] = deepClone( source[key] )
        } else {
            target[key] = source[key]
        }
    }
  }
  return target
}
export const formatDate = (date, middle = '-', hasTime = true) => {
	date = new Date(date)
	const year = date.getFullYear()
	const month = date.getMonth() + 1
	const day = date.getDate()

	const hour = date.getHours()
	const minute = date.getMinutes()
	const second = date.getSeconds()

	const t1 = [year, month, day].map(formatNumber).join(middle)
	const t2 = [hour, minute, second].map(formatNumber).join(':')

	return hasTime ? `${t1} ${t2}` : t1
}

export const formatArrToObject = (arr, key, value) => {
  let obj = {}
  if (Array.isArray(arr) && arr.length) {
    arr.forEach(el => {
      obj[el[key]] = el[value]
    })
  }
  return obj
}