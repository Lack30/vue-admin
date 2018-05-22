<script>
import { Form } from 'vue-antd-ui'

const NormalregisterForm = {
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
      <a-form id='components-form-normal-register' onSubmit={this.handleSubmit} class='register-form'>
        <a-form-item>
          {getFieldDecorator('email', {
            rules: [
              { required: true, message: '请输入邮箱!' },
              { type: 'email', message: '邮箱格式错误!'}
            ],
          })(
            <a-input size="large" prefix={<a-icon type='mail' style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='邮箱' />
          )}
        </a-form-item>
        <a-form-item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入用户名'}],
          })(
            <a-input size="large" prefix={<a-icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='用户名' />
          )}
        </a-form-item>
        <a-form-item>
          {getFieldDecorator('password', {
            rules: [
              { required: true, message: '请输入密码!' },
              { min: 6, message: '密码长度必须大于6!' }
            ],
          })(
            <a-input size="large" prefix={<a-icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />} type='password' placeholder='密码' />
          )}
        </a-form-item>
        <a-form-item>
          {getFieldDecorator('agree', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <a-checkbox><router-link to="#">同意协议</router-link> </a-checkbox>
          )}
          <router-link class='register-form-forgot' to='/login'>直接登录</router-link>
          <a-button size="large" type='primary' htmlType='submit' class='register-form-button'>
            立即注册
          </a-button>
        </a-form-item>
      </a-form>
    )
  },
}

export default Form.create()(NormalregisterForm)
</script>
<style>
#components-form-normal-register .register-form {
  max-width: 300px;
}
#components-form-normal-register .register-form-forgot {
  float: right;
}
#components-form-normal-register .register-form-button {
  width: 100%;
}
</style>