const Mock = require('mockjs')

Mock.mock('/api/users', 'get', (req, res) => {
  return Mock.mock({
    'users|10': [{
      'id|+1': 1,
      'avatar': '@image()',
      'username': '@cname()',
      'email': '@email()',
      'desc': '@csentence()'
    }]
  })
})

Mock.mock('/api/table-list', 'get', (req, res) => {
  return Mock.mock({
    'data|20': [{
      'number|+1': 1,
      'desc': '@csentence(6)',
      'count|1-1000': 1,
      'status|1': ['运行中','已上线','关闭', '异常'],
      'time': '@datetime()',
    }]
  })
})

Mock.mock('/api/basic-list', 'get', (req, res) => {
  return Mock.mock({
    'data|5': [{
      'img': "@image('100x100')",
      'title': '@word',
      'content': '@csentence(20)',
      'author': '@cname()',
      'create_time': '@datetime()',
      'status|1': ['ok', 'error'],
      'process|1-100': 1, 
    }]
  })
})

Mock.mock('/api/article-list', 'get', (req, res) => {
  return Mock.mock({
    'data|5': [{
      'title': '@word',
      'desc': '@csentence(40)',
      'author': '@cname()',
      'img': '@img("50x50")',
      'tags': ['Python', 'Vue', 'Html'],
      'url': '@url()',
      'create_time': '@datetime()',
      'star|1-200': 1,
      'like|1-300': 1,
      'comment|1-400': 1, 
    }]
  })
})

export default Mock
