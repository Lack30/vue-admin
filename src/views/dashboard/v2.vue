<template>
    <div id='v2'>
        <a-row class="bg-while p-3">
            <a-col :span="12">
                <span class="float-left mr-2">
                    <img src="../../assets/images/avatar.jpg" class="rounded-circle" width="60" height="60" alt="">
                </span>
                <span class="float-left">
                    <h2>早安，xingyys，祝你开心每一天！</h2>
                    <span class="text-muted">xx专家
                        <a-divider type="vertical" />某某公司－某某某事业群－某某平台部－某某技术部－UED</span>
                </span>
            </a-col>
            <a-col :span="12">
                <span class="float-right px-4">
                    <span>项目访问</span>
                    <h1>2,223</h1>
                </span>
                <span class="float-right px-4 border-right">
                    <span>团队内排名</span>
                    <h1>
                        8 /
                        <span class="text-muted">24</span>
                    </h1>
                </span>
                <span class="float-right px-4 border-right">
                    <span>项目数</span>
                    <h1>56</h1>
                </span>
            </a-col>
        </a-row>
        <a-row :gutter="24" class="mt-4 mx-3">
            <a-col :span="16">
                <a-card class="card" title="进行中的项目">
                    <router-link to="#" slot="extra">全部项目</router-link>
                    <a-card-grid style="width:33.3%;textAlign:'center'">
                        <div>
                            <img src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png" width="30" class="rounded-circle" alt="">
                            <router-link to="#" class="ml-2">Alipay</router-link>
                        </div>
                        <div class="my-2">
                            那是一种内在的东西，他们到达不了，也无法触及的
                        </div>
                        <div>
                            <router-link to="#">科学搬砖组</router-link>
                            <small class="float-right">4 小时前</small>
                        </div>
                    </a-card-grid>
                    <a-card-grid style="width:33.3%;textAlign:'center'">
                        <div>
                            <img src="https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png" width="30" class="rounded-circle" alt="">
                            <span class="ml-2">Angular</span>
                        </div>
                        <div class="my-2">
                            希望是一个好东西，也许是最好的，好东西是
                        </div>
                        <div>
                            <router-link to="#">全组都是吴彦祖</router-link>
                            <small class="float-right">10 个月前</small>
                        </div>
                    </a-card-grid>
                    <a-card-grid style="width:33.3%;textAlign:'center'">
                        <div>
                            <img src="https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png" width="30" class="rounded-circle" alt="">
                            <span class="ml-2">Angular</span>
                        </div>
                        <div class="my-2">
                            希望是一个好东西，也许是最好的，好东西是
                        </div>
                        <div>
                            <router-link to="#">全组都是吴彦祖</router-link>
                            <small class="float-right">10 个月前</small>
                        </div>
                    </a-card-grid>
                    <a-card-grid style="width:33.3%;textAlign:'center'">
                        <div>
                            <img src="https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png" width="30" class="rounded-circle" alt="">
                            <span class="ml-2">Angular</span>
                        </div>
                        <div class="my-2">
                            希望是一个好东西，也许是最好的，好东西是
                        </div>
                        <div>
                            <router-link to="#">全组都是吴彦祖</router-link>
                            <small class="float-right">10 个月前</small>
                        </div>
                    </a-card-grid>
                    <a-card-grid style="width:33.3%;textAlign:'center'">
                        <div>
                            <img src="https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png" width="30" class="rounded-circle" alt="">
                            <span class="ml-2">Angular</span>
                        </div>
                        <div class="my-2">
                            希望是一个好东西，也许是最好的，好东西是
                        </div>
                        <div>
                            <router-link to="#">全组都是吴彦祖</router-link>
                            <small class="float-right">10 个月前</small>
                        </div>
                    </a-card-grid>
                    <a-card-grid style="width:33.3%;textAlign:'center'">
                        <div>
                            <img src="https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png" width="30" class="rounded-circle" alt="">
                            <span class="ml-2">Angular</span>
                        </div>
                        <div class="my-2">
                            希望是一个好东西，也许是最好的，好东西是
                        </div>
                        <div>
                            <router-link to="#">全组都是吴彦祖</router-link>
                            <small class="float-right">10 个月前</small>
                        </div>
                    </a-card-grid>
                </a-card>
                <a-card class="card mt-4" title="动态">
                    <div class="px-4">
                        <div class="media py-2 border-bottom">
                            <img src="../../assets/images/avatar.jpg" width="40" height="40" class="rounded-circle float-left mr-3" alt="">
                            <div class="media-body">
                                <div>
                                    <router-link class="text-dark mr-2" to="#">xingyys</router-link>在
                                    <router-link class="mx-1" to="#">XX团队</router-link>新建项目
                                    <router-link class="mx-1" to="#">XXXX</router-link>
                                </div>
                                <span>4 小时前</span>
                            </div>
                        </div>
                        <div class="media py-2 border-bottom">
                            <img src="../../assets/images/avatar.jpg" width="40" height="40" class="rounded-circle float-left mr-3" alt="">
                            <div class="media-body">
                                <div>
                                    <router-link class="text-dark mr-2" to="#">xingyys</router-link>在
                                    <router-link class="mx-1" to="#">XX团队</router-link>新建项目
                                    <router-link class="mx-1" to="#">XXXX</router-link>
                                </div>
                                <span>4 小时前</span>
                            </div>
                        </div>
                        <div class="media py-2 border-bottom">
                            <img src="../../assets/images/avatar.jpg" width="40" height="40" class="rounded-circle float-left mr-3" alt="">
                            <div class="media-body">
                                <div>
                                    <router-link class="text-dark mr-2" to="#">xingyys</router-link>在
                                    <router-link class="mx-1" to="#">XX团队</router-link>新建项目
                                    <router-link class="mx-1" to="#">XXXX</router-link>
                                </div>
                                <span>4 小时前</span>
                            </div>
                        </div>
                        <div class="media py-2 border-bottom">
                            <img src="../../assets/images/avatar.jpg" width="40" height="40" class="rounded-circle float-left mr-3" alt="">
                            <div class="media-body">
                                <div>
                                    <router-link class="text-dark mr-2" to="#">xingyys</router-link>在
                                    <router-link class="mx-1" to="#">XX团队</router-link>新建项目
                                    <router-link class="mx-1" to="#">XXXX</router-link>
                                </div>
                                <span>4 小时前</span>
                            </div>
                        </div>
                        <div class="media py-2 border-bottom">
                            <img src="../../assets/images/avatar.jpg" width="40" height="40" class="rounded-circle float-left mr-3" alt="">
                            <div class="media-body">
                                <div>
                                    <router-link class="text-dark mr-2" to="#">xingyys</router-link>在
                                    <router-link class="mx-1" to="#">XX团队</router-link>新建项目
                                    <router-link class="mx-1" to="#">XXXX</router-link>
                                </div>
                                <span>4 小时前</span>
                            </div>
                        </div>
                        <div class="media py-2 border-bottom">
                            <img src="../../assets/images/avatar.jpg" width="40" height="40" class="rounded-circle float-left mr-3" alt="">
                            <div class="media-body">
                                <div>
                                    <router-link class="text-dark mr-2" to="#">xingyys</router-link>在
                                    <router-link class="mx-1" to="#">XX团队</router-link>新建项目
                                    <router-link class="mx-1" to="#">XXXX</router-link>
                                </div>
                                <span>4 小时前</span>
                            </div>
                        </div>
                    </div>
                </a-card>
            </a-col>
            <a-col :span="8">
                <a-card class="card" title="快速开始 / 便捷导航">
                    <div class="p-4">
                        <div>
                            <router-link to="#" style="display:inline-block;width: 24%;">操作一</router-link>
                            <router-link to="#" style="display:inline-block;width: 24%;">操作二</router-link>
                            <router-link to="#" style="display:inline-block;width: 24%;">操作三</router-link>
                            <router-link to="#" style="display:inline-block;width: 24%;">操作四</router-link>
                        </div>
                        <div class="mt-3">
                            <router-link to="#" style="display:inline-block;width: 24%;">操作五</router-link>
                            <router-link to="#" style="display:inline-block;width: 24%;">操作六</router-link>
                            <a-button type="primary" ghost size="small" style="display:inline-block;width: 24%;">
                                <a-icon type="plus" /> 添加
                            </a-button>
                        </div>
                    </div>
                </a-card>
                <a-card class="mt-4" title="XX 指数">
                    <Chart3></Chart3>
                </a-card>
                <a-card class="card mt-4" title="团队">
                    <div class="p-4">
                        <div>
                            <router-link to="#" style="display:inline-block;width: 49%;">
                                <img src="../../assets/images/avatar.jpg" width="30" height="30" class="rounded-circle mr-2" alt="">
                                <span>XX团队</span>
                            </router-link>
                            <router-link to="#" style="display:inline-block;width: 49%;">
                                <img src="../../assets/images/avatar.jpg" width="30" height="30" class="rounded-circle mr-2" alt="">
                                <span>XX团队</span>
                            </router-link>
                        </div>
                        <div class="mt-3">
                            <router-link to="#" style="display:inline-block;width: 49%;">
                                <img src="../../assets/images/avatar.jpg" width="30" height="30" class="rounded-circle mr-2" alt="">
                                <span>XX团队</span>
                            </router-link>
                            <router-link to="#" style="display:inline-block;width: 49%;">
                                <img src="../../assets/images/avatar.jpg" width="30" height="30" class="rounded-circle mr-2" alt="">
                                <span>XX团队</span>
                            </router-link>
                        </div>
                        <div class="mt-3">
                            <router-link to="#" style="display:inline-block;width: 49%;">
                                <img src="../../assets/images/avatar.jpg" width="30" height="30" class="rounded-circle mr-2" alt="">
                                <span>XX团队</span>
                            </router-link>
                        </div>
                    </div>
                </a-card>
            </a-col>
        </a-row>
    </div>
</template>

<script>
export default {
  mounted() {
    this.$http.get("/api/users").then(res => {
      console.log(res.data);
    });
  },
  components: {
    Chart3: resolve => require(["../../components/chart3"], resolve)
  }
};
</script>

<style scoped>
</style>
