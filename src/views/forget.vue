<template>
    <div id='forget'>
        <div class="i-form">
            <img src="../assets/images/background.jpeg" alt="">
            <h3 class="mt-2">笨蛋自以为聪明，聪明人才知道自己是笨蛋</h3>
            <span class="d-block text-right">—— 莎士比亚</span>
            <h2 class="text-center">
                <img src="../assets/images/logo.png" class="logo" alt="">· 忘记密码</h2>
            <Forget class="text-left"></Forget>
            <router-link to="/login">返回登录</router-link>
            <div class="mt-2">@copyright 2016-2020 power by xingyys</div>
        </div>
    </div>
</template>

<script>
export default {
  name: "forget",
  data() {
    return {

    };
  },
  methods: {
    
  },
  components: {
      Forget: resolve => require(['../components/forget'], resolve)
  }
};
</script>

<style lang="less" scoped>
#forget {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-image: url("../assets/images/background.jpeg");
  background-size: cover;
  text-align: center;
  .i-form {
    padding: 30px;
    width: 100%;
    max-width: 350px;
    margin: 0px auto;
    position: absolute;
    background: #fff;
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
    .logo {
      position: relative;
      height: 100%;
      top: -3px;
    }
  }
}
</style>