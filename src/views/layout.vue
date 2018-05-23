<template>
    <a-layout id="layout">
        <a-layout-sider :trigger="null" collapsible v-model="collapsed" width="256">
            <div class="logo">
                <h1 class="text-light text-truncate">
                    Vue Antd
                </h1>
            </div>
            <a-menu :defaultSelectedKeys="selected" @click="ClickMenu" @select="SelectMenu" @openChange="OpenMenu" :defaultOpenKeys="opened" mode="inline" theme="dark">
                <a-sub-menu v-if="item.hasOwnProperty('children')" v-for="item in $router.options.routes[0].children" :key="item.path">
                    <span slot="title">
                        <a-icon :type="item.meta.icon" />
                        <span>{{ item.name }}</span>
                    </span>
                    <a-menu-item :key="child.path" v-for="child in item.children">{{ child.name }}</a-menu-item>
                </a-sub-menu>
                <a-menu-item v-else>{{ item }}</a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header class="shadow border-bottom bg-while p-0">
                <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="()=> collapsed = !collapsed" />
                <div class="float-right mr-4">
                    <a-popover placement="bottomRight" trigger="click">
                        <div slot="content" class="info">
                            <a-tabs defaultActiveKey="1" @change="callback" size="large">
                                <a-tab-pane tab="通知 (3)" key="1">1</a-tab-pane>
                                <a-tab-pane tab="消息 (4)" key="2">2</a-tab-pane>
                                <a-tab-pane tab="待办 (6)" key="3">3</a-tab-pane>
                            </a-tabs>
                        </div>
                        <span>
                            <a-icon class="trigger" type="bell" />
                        </span>
                    </a-popover>
                    <a-dropdown>
                        <div class="ant-dropdown-link float-right trigger">
                            <img src="../assets/images/avatar.jpg" width="30" height="30" class="rounded-circle" alt=""> xingyys
                        </div>
                        <a-menu slot="overlay">
                            <a-menu-item key="0">
                                <router-link to="#">
                                    <a-icon type="user" class="mr-2" />个人中心</router-link>
                            </a-menu-item>
                            <a-menu-item key="1">
                                <router-link to="#">
                                    <a-icon type="setting" class="mr-2" />设置</router-link>
                            </a-menu-item>
                            <a-menu-item key="2">
                                <router-link to="#">
                                    <a-icon type="mail" class="mr-2" />消息</router-link>
                            </a-menu-item>
                            <a-menu-divider />
                            <a-menu-item key="3">
                                <router-link to="#">
                                    <a-icon type="logout" class="mr-2" />退出登录</router-link>
                            </a-menu-item>
                        </a-menu>
                    </a-dropdown>
                </div>
            </a-layout-header>
            <a-breadcrumb class="bg-while px-3 py-2">
                <a-breadcrumb-item v-for="item in $route.matched" :key="item.id">{{ item.name }}</a-breadcrumb-item>
            </a-breadcrumb>
            <a-layout-content>
                <router-view></router-view>
            </a-layout-content>
            <a-layout-footer class="text-center">
                <div>
                    <a href="https://vuecomponent.github.io/ant-design/docs/vue/introduce/" class="text-dark mr-2">Vue Ant</a>
                    <a href="https://github.com/xingyys/vue-admin"><a-icon type="github" class="text-dark mr-2"></a-icon></a>
                    <a href="https://pro.ant.design/index-cn" class="text-dark">Pro 首页</a>
                </div>
                <div>Ant Design ©2016 Created by Ant UED</div>
            </a-layout-footer>
        </a-layout>
    </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
      selected: [localStorage.selectMenu] || ["/dashboard/v1"],
      opened: JSON.parse(localStorage.openMenu) || []
    };
  },
  methods: {
    ClickMenu(item) {
      this.$router.push(item.key);
    },
    OpenMenu(item) {
      localStorage.openMenu = JSON.stringify(item);
    },
    SelectMenu(item) {
      localStorage.selectMenu = item.key;
    },
    callback(item) {
      console.log(item);
    }
  }
};
</script>

<style>
#layout {
  height: 100%;
}

#layout .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 12px;
  cursor: pointer;
  transition: color 0.3s;
}

#layout .trigger:hover {
  color: #1890ff;
  background: #e6f7ff;
}

.info {
  position: relative;
  top: -10px;
}

#layout .logo {
  height: 32px;
  margin: 16px;
}
</style>