<template>
    <div id="500">
        <div class="bg-white px-3 border-bottom pb-2">
            <h2>500错误</h2>
        </div>
        <div class="main">
            <img src="@/assets/images/500.png" alt="">
            <div class="body">
                <div style="font-size: 64px;">500</div>
                <div style="font-size: 28px;">抱歉，服务器出错了</div>
                <a-button class="mt-3" type="primary">返回首页</a-button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 500px;
  width: 100%;
}

.main .body {
    max-width: 500px;
}
</style>