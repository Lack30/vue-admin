<template>
    <div id='login'>
        <div class="bg-white px-3 border-bottom pb-2">
            <router-link to="/login">
                <h2>登录页</h2>
            </router-link>
        </div>
        <div class="main">
            <div class="body">
                <a-row>
                    <a-col class="left border-right" :span="12">
                        <img src="@/assets/images/background.jpeg" width="100" height="100" class="rounded-circle" alt="">
                        <h3 class="mt-2">时间是一切财富中最宝贵的财富</h3>
                        <span class="d-block text-right">—— 德奥弗拉斯多</span>
                        <div class="mt-2">@copyright 2016-2020 power by xingyys</div>
                    </a-col>
                    <a-col class="right" :span="12">
                        <h1 class="text-center">
                            <img src="@/assets/images/logo.png" class="logo" alt="">· 登录
                        </h1>
                        <Login></Login>
                        <a-divider>
                            其他登录方式 ·
                            <router-link to="/register">注册</router-link>
                        </a-divider>
                        <div class="text-center">
                            <a-icon class="mr-3 text-success" style="font-size: 32px;" type="wechat" />
                            <a-icon class="mr-3 text-danger" style="font-size: 32px;" type="weibo" />
                            <a-icon class="mr-3 text-primary" style="font-size: 32px;" type="alipay" />
                            <a-icon style="font-size: 32px; text-dark" type="github" />
                        </div>
                    </a-col>
                </a-row>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  components: {
    Login: resolve => require(["@/components/login"], resolve)
  }
};
</script>

<style lang="less" scoped>
.main {
  display: flex;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  min-width: 500px;
  .body {
    background: #fff;
    padding: 10px;
    width: 100%;
    max-width: 700px;
    margin: 0px auto;
    background: #fff;
    .left {
      height: 200px;
      display: block;
      text-align: center;
      padding: 10px;
      margin-top: 70px;
    }
    .right {
      padding: 10px;
      .logo {
        position: relative;
        top: -3px;
      }
    }
  }
}
</style>