<template>
  <div id="step">
    <div class="bg-while pl-3 pb-2 border-bottom">
      <h2>分步表单</h2>
      <span>将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。</span>
    </div>
    <div class="bg-while m-4 p-4">
      <div style="margin-left: auto;margin-right: auto;">
        <a-steps :current="current">
          <a-step title="填写转账信息" />
          <a-step title="确认转账信息" />
          <a-step title="完成 " />
        </a-steps>
        <template v-if="current == 0">
          <div class="w-50 mx-auto mt-4">
            <Step1 class="d-block" ref="step1"></Step1>
          </div>
          <div class="text-center">
            <a-button type="primary" @click="stepOne">
              下一步
            </a-button>
          </div>
          <div class="border-bottom my-4"></div>
          <div class="px-4">
            <h3 style="color: rgba(0,0,0,0.5)">说明</h3>
            <h4 style="color: rgba(0,0,0,0.5)">转账到支付宝账户</h4>
            <div>如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。</div>
            <h4 class="mt-2" style="color: rgba(0,0,0,0.5)">转账到银行账户</h4>
            <div>如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。</div>
          </div>
        </template>
        <template v-if="current == 1">
          <div class="w-50 mx-auto mt-4">
            <a-alert message="确认转账后，资金将直接打入对方账户，无法退回。" type="info" closable showIcon/>
            <a-form layout="horizontal">
              <a-form-item :labelCol="{span: 6}" :wrapperCol="{span: 18}" label="付款账户">
                <span>{{ form.account }}</span>
              </a-form-item>
              <a-form-item :labelCol="{span: 6}" :wrapperCol="{span: 18}" label="收款账户">
                <span>{{ form.account1 }}</span>
              </a-form-item>
              <a-form-item :labelCol="{span: 6}" :wrapperCol="{span: 18}" label="收款人姓名">
                <span>{{ form.username }}</span>
              </a-form-item>
              <a-form-item :labelCol="{span: 6}" :wrapperCol="{span: 18}" label="转账金额">
                <span style="font-size: 20px;margin-right: 10px;">{{ form.money }}</span>
                <small>(伍佰元整)</small>
              </a-form-item>
              <a-form-item>
                <span class="d-block border-bottom"></span>
              </a-form-item>
              <a-form-item :labelCol="{span: 6}" :wrapperCol="{span: 18}" label="支付密码">
                <a-input v-model="password" type="password"></a-input>
              </a-form-item>
            </a-form>
          </div>
          <div class="text-center">
            <a-button type="primary" :loading="loading" @click="stepTwo">
              提交
            </a-button>
            <a-button @click="current--">
              上一步
            </a-button>
          </div>
        </template>
        <template v-if="current == 2">
          <div class="w-50 mx-auto mt-4">
            <div class="text-center">
              <a-icon style="font-size: 64px;" class="text-success mt-3" type="check-circle" />
              <h1 class="mt-3">操作成功</h1>
              <span class="my-3">预计两小时内到账</span>
            </div>
            <a-form layout="horizontal" class="bg-light p-2 mb-2">
              <a-form-item :labelCol="{span: 6}" :wrapperCol="{span: 18}" label="付款账户">
                <span>{{ form.account }}</span>
              </a-form-item>
              <a-form-item :labelCol="{span: 6}" :wrapperCol="{span: 18}" label="收款账户">
                <span>{{ form.account1 }}</span>
              </a-form-item>
              <a-form-item :labelCol="{span: 6}" :wrapperCol="{span: 18}" label="收款人姓名">
                <span>{{ form.username }}</span>
              </a-form-item>
              <a-form-item :labelCol="{span: 6}" :wrapperCol="{span: 18}" label="转账金额">
                <span style="font-size: 20px;margin-right: 10px;">{{ form.money }}</span>
                <small>(伍佰元整)</small>
              </a-form-item>
            </a-form>
          </div>
          <div class="text-center">
            <a-button type="primary" @click="stepThree">
              再转一笔
            </a-button>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { Form } from "vue-antd-ui";

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 }
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 }
};

const Step1Form = {
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    }
  },

  render() {
    const { getFieldDecorator } = this.form;
    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: "alipay"
    })(
      <a-select style={{ width: "100px" }}>
        <a-select-option value="alipay">支付宝</a-select-option>
        <a-select-option value="bank">银行账户</a-select-option>
      </a-select>
    );
    return (
      <a-form
        layout="horizontal"
        onSubmit={this.handleSubmit}
        class="login-form"
      >
        <a-form-item {...{ props: formItemLayout }} label="付款账户">
          {getFieldDecorator("account", {
            rules: [{ required: true, message: "请输入付款账户!" }],
            initialValue: "ant-design@alipay.com"
          })(
            <a-select placeholder="请输入付款账户">
              <a-select-option value="ant-design@alipay.com">
                ant-design@alipay.com
              </a-select-option>
            </a-select>
          )}
        </a-form-item>
        <a-form-item {...{ props: formItemLayout }} label="收款账户">
          {getFieldDecorator("account1", {
            rules: [{ required: true, message: "请输入收款人账户!" }],
            initialValue: "test@example.com"
          })(
            <a-input
              addonBefore={prefixSelector}
              placeholder="test@example.com"
            />
          )}
        </a-form-item>
        <a-form-item {...{ props: formItemLayout }} label="收款人姓名">
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "请输入收款人姓名!" }],
            initialValue: "Alex"
          })(<a-input type="text" placeholder="请输入收款人姓名" />)}
        </a-form-item>
        <a-form-item {...{ props: formItemLayout }} label="转账金额">
          {getFieldDecorator("money", {
            rules: [{ required: true, message: "请输入转账金额!" }],
            initialValue: "500"
          })(<a-input type="text" placeholder="请输入金额" />)}
        </a-form-item>
      </a-form>
    );
  }
};

export default {
  data() {
    return {
      current: 0,
      form: {},
      password: "123456",
      loading: false
    };
  },
  methods: {
    stepOne() {
      this.$refs.step1.validateFieldsAndScroll((err, values) => {
        if (!err) {
          this.form = values;
          this.current++;
          console.log(values);
        }
      });
    },
    stepTwo() {
      this.loading = true;
      setTimeout(() => {
        if (this.password === "") {
          this.$message.error("支付密码不能为空");
        } else {
          this.current++;
        }
        this.loading = false;
      }, 1500);
    },
    stepThree() {
      this.current = 0;
    }
  },
  components: {
    Step1: Form.create()(Step1Form)
  }
};
</script>
