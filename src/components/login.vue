<script>
import { Form } from 'vue-antd-ui'

const NormalLoginForm = {
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        } else {
          this.$message.error('验证错误！')
        }
      })
    },
  },

  render () {
    const { getFieldDecorator } = this.form
    return (
      <a-form id='components-form-normal-login' onSubmit={this.handleSubmit} class='login-form'>
        <a-form-item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入用户名或邮箱!', trigger: 'blur' }],
          })(
            <a-input size="large" prefix={<a-icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='用户名' />
          )}
        </a-form-item>
        <a-form-item>
          {getFieldDecorator('password', {
            rules: [
              { required: true, message: '请输入密码!' },
              { min: 6, message: '密码长度必须大于6!', trigger: 'blur' }
            ],
          })(
            <a-input size="large" prefix={<a-icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />} type='password' placeholder='密码' />
          )}
        </a-form-item>
        <a-form-item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <a-checkbox>记住我</a-checkbox>
          )}
          <router-link class='login-form-forgot' to='/forget'>忘记密码</router-link>
          <a-button size="large" type='primary' htmlType='submit' class='login-form-button'>
            登录
          </a-button>
        </a-form-item>
      </a-form>
    )
  },
}

export default Form.create()(NormalLoginForm)
</script>
<style>
#components-form-normal-login .login-form {
  max-width: 300px;
}
#components-form-normal-login .login-form-forgot {
  float: right;
}
#components-form-normal-login .login-form-button {
  width: 100%;
}
</style>