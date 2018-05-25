<template>
  <a-locale-provider :locale="locale">
    <div id="app">
        <router-view/>
    </div>
  </a-locale-provider>
</template>

<script>
import zhCN from "vue-antd-ui/lib/locale-provider/zh_CN";
export default {
  name: "App",
  data() {
    return {
      locale: zhCN
    };
  },
};
</script>
