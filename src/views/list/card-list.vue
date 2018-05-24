<template>
    <div id="card">
        <div class="bg-while px-3 border-bottom">
            <a-row :gutter="16">
                <a-col :span="12">
                    <h2 class="py-2">卡片列表</h2>
                    <span>段落示意：这是一段说明这是一段说明这是一段说明这是一段说明这是一段说明这是一段说明这是一段说明这是一段说明。</span>
                    <div class="py-2 my-2">
                        <div class="d-inline mr-2 text-primary" style="font-size: 16px;">
                            <a-icon type="right-circle-o" />
                            <router-link to="#">快速开始</router-link>
                        </div>
                        <div class="d-inline mr-2 text-primary" style="font-size: 16px;">
                            <a-icon type="info-circle-o" />
                            <router-link to="#">产品简介</router-link>
                        </div>
                        <div class="d-inline mr-2 text-primary" style="font-size: 16px;">
                            <a-icon type="compass" />
                            <router-link to="#">产品文档</router-link>
                        </div>
                    </div>
                </a-col>
                <a-col :span="12">
                    <img src="https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png" width="200" alt="">
                </a-col>
            </a-row>
        </div>
        <a-row :gutter="24" class="mx-3">
            <a-col :span="8">
                <a-button type="dashed" class="mt-4" style="width: 100%;height: 180px;">
                    <a-icon type="plus"></a-icon>
                    新增产品
                </a-button>
            </a-col>
            <a-col :span="8">
                <a-card hoverable class="mt-4">
                    <ul class="ant-card-actions" slot="actions">
                        <li style="width: 50%;">
                            操作1
                        </li>
                        <li style="width: 50%;">
                            操作2
                        </li>
                    </ul>
                    <a-card-meta title="Card title" description="在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准">
                        <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    </a-card-meta>
                </a-card>
            </a-col>
            <a-col :span="8">
                <a-card hoverable class="mt-4">
                    <ul class="ant-card-actions" slot="actions">
                        <li style="width: 50%;">
                            操作1
                        </li>
                        <li style="width: 50%;">
                            操作2
                        </li>
                    </ul>
                    <a-card-meta title="Card title" description="在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准">
                        <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    </a-card-meta>
                </a-card>
            </a-col>
            <a-col :span="8">
                <a-card hoverable class="mt-4">
                    <ul class="ant-card-actions" slot="actions">
                        <li style="width: 50%;">
                            操作1
                        </li>
                        <li style="width: 50%;">
                            操作2
                        </li>
                    </ul>
                    <a-card-meta title="Card title" description="在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准">
                        <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    </a-card-meta>
                </a-card>
            </a-col>
            <a-col :span="8">
                <a-card hoverable class="mt-4">
                    <ul class="ant-card-actions" slot="actions">
                        <li style="width: 50%;">
                            操作1
                        </li>
                        <li style="width: 50%;">
                            操作2
                        </li>
                    </ul>
                    <a-card-meta title="Card title" description="在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准">
                        <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    </a-card-meta>
                </a-card>
            </a-col>
            <a-col :span="8">
                <a-card hoverable class="mt-4">
                    <ul class="ant-card-actions" slot="actions">
                        <li style="width: 50%;">
                            操作1
                        </li>
                        <li style="width: 50%;">
                            操作2
                        </li>
                    </ul>
                    <a-card-meta title="Card title" description="在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准">
                        <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    </a-card-meta>
                </a-card>
            </a-col>
            <a-col :span="8">
                <a-card hoverable class="mt-4">
                    <ul class="ant-card-actions" slot="actions">
                        <li style="width: 50%;">
                            操作1
                        </li>
                        <li style="width: 50%;">
                            操作2
                        </li>
                    </ul>
                    <a-card-meta title="Card title" description="在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准">
                        <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    </a-card-meta>
                </a-card>
            </a-col>
            <a-col :span="8">
                <a-card hoverable class="mt-4">
                    <ul class="ant-card-actions" slot="actions">
                        <li style="width: 50%;">
                            操作1
                        </li>
                        <li style="width: 50%;">
                            操作2
                        </li>
                    </ul>
                    <a-card-meta title="Card title" description="在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准">
                        <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    </a-card-meta>
                </a-card>
            </a-col>
            <a-col :span="8">
                <a-card hoverable class="mt-4">
                    <ul class="ant-card-actions" slot="actions">
                        <li style="width: 50%;">
                            操作1
                        </li>
                        <li style="width: 50%;">
                            操作2
                        </li>
                    </ul>
                    <a-card-meta title="Card title" description="在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准">
                        <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    </a-card-meta>
                </a-card>
            </a-col>
        </a-row>
    </div>
</template>


<script>
export default {
  name: "card",
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>
