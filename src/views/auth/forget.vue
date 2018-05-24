<template>
    <div id='forget'>
        <div class="bg-white px-3 border-bottom pb-2">
            <router-link to="/forget"><h2>忘记密码</h2></router-link>
        </div>
        <div class="main">
            <div class="body">
                <img src="@/assets/images/background.jpeg" alt="">
                <h3 class="mt-2">笨蛋自以为聪明，聪明人才知道自己是笨蛋</h3>
                <span class="d-block text-right">—— 莎士比亚</span>
                <h2 class="text-center">
                    <img src="@/assets/images/logo.png" class="logo" alt="">· 忘记密码</h2>
                <Forget class="text-left"></Forget>
                <div class="mt-2">@copyright 2016-2020 power by xingyys</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  components: {
    Forget: resolve => require(["@/components/forget"], resolve)
  }
};
</script>

<style lang="less" scoped>
.main {
  display: flex;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  .body {
    padding: 30px;
    width: 100%;
    max-width: 350px;
    margin: 0px auto;
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