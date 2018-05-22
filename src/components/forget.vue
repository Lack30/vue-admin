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
          <a-button size="large" type='primary' htmlType='submit' class='register-form-button'>
            找回密码
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