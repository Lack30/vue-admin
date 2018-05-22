<template>
    <div id="register">
        <div class="i-form">
            <a-row>
                <a-col class="left border-right" :span="12">
                    <img src="../../assets/images/background.jpeg" width="100" height="100" class="rounded-circle" alt="">
                    <h3 class="mt-2">经过费力才得到的东西要比不费力就得到的东西叫能另人喜爱。一目了然的真理不费力就可以懂，懂了也感到暂时的愉快，但是很快就被遗忘了</h3>
                    <span class="d-block text-right"> —— 薄伽丘</span>
                    <div class="mt-2">@copyright 2016-2020 power by xingyys</div>
                </a-col>
                <a-col class="right" :span="12">
                    <h1 class="text-center">
                        <img src="../../assets/images/logo.png" class="logo" alt="">· 注册
                    </h1>
                    <Register></Register>                    
                </a-col>
            </a-row>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        Register: resolve => require(['../../components/register'], resolve)
    }
};
</script>

<style lang="less" scoped>
#register {
  background-image: url("../../assets/images/background.jpeg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  .i-form {
    background: #fff;
    padding: 10px;
    width: 100%;
    max-width: 700px;
    margin: 0px auto;
    background: #fff;
    .left {
        height: 300px;
        display: block;
        text-align: center;
        padding: 10px;
        margin-top: 30px;
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

