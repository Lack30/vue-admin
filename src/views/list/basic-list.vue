<template>
    <div id="basic">
        <div class="bg-while m-4 p-4">
            <a-row class="text-center">
                <a-col :span="8" class="border-right">
                    <span>我的待办</span>
                    <h2>
                        8个任务
                    </h2>
                </a-col>
                <a-col :span="8" class="border-right">
                    <span>本周任务平均处理时间</span>
                    <h2>32分钟</h2>
                </a-col>
                <a-col :span="8">
                    <span>本周完成任务数</span>
                    <h2>24个任务</h2>
                </a-col>
            </a-row>
        </div>
        <div class="bg-while m-4 p-4">
            <div>
                <h3 class="d-inline-block">标准列表</h3>
                <div class="float-right">
                    <a-radio-group defaultValue="a">
                        <a-radio-button value="a">全部</a-radio-button>
                        <a-radio-button value="b">进行中</a-radio-button>
                        <a-radio-button value="c">等待中</a-radio-button>
                    </a-radio-group>
                    <a-input-search placeholder="请输入" style="width: 300px;" class="ml-3" />
                </div>
            </div>
            <div>
                <a-button type="" type="dashed" class="mt-4 w-100">
                    <a-icon type="plus"></a-icon>
                    添加
                </a-button>
                <div>
                    <a-row v-for="item in data" class="py-3 border-bottom" :key="item.id">
                        <a-col :span="12">
                            <img :src="item.img" width="60" height="60" class="rounded float-left mr-3" alt="">
                            <h3>
                                <router-link to="#">{{ item.title }}</router-link>
                            </h3>
                            <span>{{ item.content }}</span>
                        </a-col>
                        <a-col :span="2" class="text-center">
                            <h3 class="text-black-30">Owner</h3>
                            <span class="d-block">{{ item.author }}</span>
                        </a-col>
                        <a-col :span="3">
                            <h3 class="text-muted">开始时间</h3>
                            <span class="d-block">{{ item.create_time }}</span>
                        </a-col>
                        <a-col :span="4">
                            <a-progress :status="item.status === 'ok'? 'active' : 'exception'" :percent="item.process" />
                        </a-col>
                        <a-col :span="3" class="text-right">
                            <router-link to="#">编辑</router-link>
                            <a-divider type="vertical" />
                            <a-dropdown>
                                <a class="ant-dropdown-link" href="#">
                                    更多
                                    <a-icon type="down" />
                                </a>
                                <a-menu slot="overlay">
                                    <a-menu-item>
                                        <a href="javascript:;">编辑</a>
                                    </a-menu-item>
                                    <a-menu-item>
                                        <a href="javascript:;">删除</a>
                                    </a-menu-item>
                                </a-menu>
                            </a-dropdown>
                        </a-col>
                    </a-row>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
  name: "basic",
  data() {
    return {
      data: []
    };
  },
  mounted() {
    this.$http.get("/api/basic-list").then(res => {
      console.log(res.data.data);
      this.data = res.data.data;
    });
  }
};
</script>
