<template>
    <div id="article-list">
        <div class="bg-while px-3 border-bottom">
            <h2>搜索列表</h2>
            <div class="text-center pb-4">
                <a-input-search placeholder="请输入" enterButton="搜索" class="w-50" size="large" />
            </div>
        </div>
        <div class="m-4 bg-while px-4 p-3">
            <div v-for="item in data" class="border-bottom pb-3 mt-3" :key="item.id">
                <h2>
                    <router-link to="#" class="text-dark">{{ item.title }}</router-link>
                </h2>
                <a-tag v-for="tag in item.tags" :key="tag">{{ tag }}</a-tag>
                <div class="mt-3">{{ item.desc }}</div>
                <div class="mt-3">
                    <img :src="item.img" width="30" height="30" class="rounded-circle mr-2" alt="">
                    <router-link to="#" class="mr-1">{{ item.author }}</router-link>发布在
                    <router-link class="mr-2" to="#">{{ item.url }}</router-link>
                    <span class="text-black-30">{{ item.create_time }}</span>
                </div>
                <div class="mt-3">
                    <router-link to="#" class="text-black-50">
                        <a-icon type="star-o"></a-icon>
                        {{ item.star }}
                    </router-link>
                    <a-divider type="vertical" />
                    <router-link to="#" class="text-black-50">
                        <a-icon type="like-o"></a-icon>
                        {{ item.like }}
                    </router-link>
                    <a-divider type="vertical" />
                    <router-link to="#" class="text-black-50">
                        <a-icon type="message"></a-icon>
                        {{ item.comment }}
                    </router-link>
                </div>
            </div>
            <div class="text-center mt-3">
                <a-button :loading="loading" @click="loadMore">加载更多</a-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "article",
  data() {
    return {
      data: [],
      loading: false,
    };
  },
  methods: {
      loadMore() {
          this.loading = true
          setTimeout(() => {
              this.$http.get('/api/article-list').then(res => {
                  res.data.data.map(item => {
                      this.data.push(item)
                  })
                  this.loading = false
              })
          }, 1500)
      }
  },
  mounted() {
    this.$http.get("/api/article-list").then(res => {
      console.log(res.data);
      this.data = res.data.data;
    });
  }
};
</script>

