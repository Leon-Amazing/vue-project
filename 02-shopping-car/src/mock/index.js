import Mock from 'mockjs'

Mock.mock(/\/getFilterList/, 'get', {
  'result': [
    {
      title: '品牌',
      list: ['华为', '联想', '小米', 'Mac', '华硕', '戴尔', '宏基', '惠普', '神舟']
    },
    {
      title: '价格',
      list: ['0-3999', '4000-4499', '4500-4999', '5000-5499', '5500-5999', '6000-6499', '6500-6999', '7000及以上']
    },
    {
      title: '分类',
      list: ['游戏本', '轻薄本', '二合一笔记本', '常规笔记本', '加固']
    },
    {
      title: '尺寸',
      list: ['11英寸及以下', '11.6英寸', '14.1英寸', '15.0英寸', '15.4英寸', '15.5英寸', '15.6英寸', '16.6英寸', '17.3英寸']
    },
    {
      title: 'CPU',
      list: ['i9', 'i7', 'i5', 'i3', 'AMD']
    }
  ]
})

Mock.mock(/\/getProductList/, 'get', {
  'result|100': [
    {
      isAdd: false,
      'cid|+1': 1,
      url: Mock.Random.image('210x210', Mock.Random.color()),
      name: '@cname(2, 4)',
      'price|3000-30000': 1,
      'id|1': ['huawei', 'lianxiang', 'xiaomi', 'Mac', 'huashuo', 'daier', 'hongji', 'huipu', 'shenzhou'],
      'type|1': ['game', 'qb', '1-1', 'cg', 'jg'],
      'size|1': ['11英寸及以下', '11.6英寸', '14.1英寸', '15.0英寸', '15.4英寸', '15.5英寸', '15.6英寸', '16.6英寸', '17.3英寸'],
      'CPU|1': ['i9', 'i7', 'i5', 'i3', 'AMD']
    }
  ]
})
