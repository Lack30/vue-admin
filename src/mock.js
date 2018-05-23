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

export default Mock
