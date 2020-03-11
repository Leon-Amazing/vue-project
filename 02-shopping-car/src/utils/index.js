export function getType (value) {
  let str = ''
  switch (value) {
    case 'game':
      str = '游戏本'
      break
    case 'qb':
      str = '轻薄本'
      break
    case '1-1':
      str = '二合一笔记本'
      break
    case 'cg':
      str = '常规笔记本'
      break
    default:
      str = '加固'
  }
  return str
}

export function getBrand (value) {
  let str = ''
  switch (value) {
    case 'huawei':
      str = '华为'
      break
    case 'lianxiang':
      str = '联想'
      break
    case 'xiaomi':
      str = '小米'
      break
    case 'Mac':
      str = 'Mac'
      break
    case 'huashuo':
      str = '华硕'
      break
    case 'daier':
      str = '戴尔'
      break
    case 'hongji':
      str = '宏基'
      break
    case 'huipu':
      str = '惠普'
      break
    default:
      str = '神舟'
  }
  return str
}
