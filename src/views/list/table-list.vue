<template>
    <div id="table">
        <div class="bg-while pl-3 py-1 border-bottom">
            <h2>查询表格</h2>
        </div>
        <div class="m-4 bg-while p-4">
            <a-form>
                <a-row :gutter="24">
                    <a-col :span="8">
                        <a-form-item label="规则编号" :labelCol="{span: 6}" :wrapperCol="{span: 18}">
                            <a-input placeholder="请输入" />
                        </a-form-item>
                    </a-col>
                    <a-col :span="8">
                        <a-form-item label="使用状态" :labelCol="{span: 6}" :wrapperCol="{span: 18}">
                            <a-input placeholder="请选择"></a-input>
                        </a-form-item>
                    </a-col>
                    <a-col :span="8" v-if="expose">
                        <a-form-item label="调用次数" :labelCol="{span: 6}" :wrapperCol="{span: 18}">
                            <a-input></a-input>
                        </a-form-item>
                    </a-col>
                    <a-col :span="8" v-if="expose">
                        <a-form-item label="更新日期" :labelCol="{span: 6}" :wrapperCol="{span: 18}">
                            <a-date-picker showTime format='YYYY-MM-DD HH:mm:ss' class="w-100" />
                        </a-form-item>
                    </a-col>
                    <a-col :span="8" v-if="expose">
                        <a-form-item label="使用状态" :labelCol="{span: 6}" :wrapperCol="{span: 18}">
                            <a-select placeholder="请选择">
                                <a-select-option value="关闭">关闭</a-select-option>
                                <a-select-option value="连接中">连接中</a-select-option>
                            </a-select>
                        </a-form-item>
                    </a-col>
                    <a-col :span="8" v-if="expose">
                        <a-form-item label="使用状态" :labelCol="{span: 6}" :wrapperCol="{span: 18}">
                            <a-select placeholder="请选择">
                                <a-select-option value="关闭">关闭</a-select-option>
                                <a-select-option value="连接中">连接中</a-select-option>
                            </a-select>
                        </a-form-item>
                    </a-col>
                </a-row>
                <div class="float-right">
                    <a-button type="primary" class="mr-2">查询</a-button>
                    <a-button class="mr-2">重置</a-button>
                    <a @click="expose = !expose" v-if="!expose" type="text">展开
                        <a-icon type="down" /></a>
                    <a @click="expose = !expose" v-else type="text">收起
                        <a-icon type="up" /></a>
                </div>
            </a-form>
            <a-button type="primary">
                <a-icon type="plus"></a-icon>
                新建
            </a-button>
            <a-alert class="mt-3" type="info" showIcon>
                <span slot="message">已选择 0 项 服务调用次数总计 0 万</span>
            </a-alert>
            <a-table class="mt-3" :columns="columns" :rowKey="record => record.registered" :rowSelection="rowSelection" :dataSource="data" :pagination="pagination" :loading="loading" @change="handleTableChange">
                <template slot="number" slot-scope="number">
                    TradeCode {{ number }}
                </template>
                <template class="text-right" slot="count" slot-scope="count">
                    {{ count }} 万
                </template>
                <template slot="status" , slot-scope="status">
                    <a-badge status="success" v-if="status === '已上线'" />
                    <a-badge status="processing" v-else-if="status === '运行中'" />
                    <a-badge status="default" v-else-if="status === '关闭'" />
                    <a-badge status="error" v-else-if="status === '异常'" /> {{ status }}
                </template>
                <span slot="action" slot-scope="text, record">
                    <router-link to="#">配置</router-link>
                    <a-divider type="vertical" />
                    <router-link to="#">订阅告警</router-link>
                </span>
            </a-table>
        </div>
    </div>
</template>

<script>
const columns = [
  {
    title: "规则编号",
    dataIndex: "number",
    scopedSlots: { customRender: "number" }
  },
  {
    title: "描述",
    dataIndex: "desc"
  },
  {
    title: "服务调用次数",
    dataIndex: "count",
    scopedSlots: { customRender: "count" },
    sorter: true
  },
  {
    title: "状态",
    dataIndex: "status",
    scopedSlots: { customRender: "status" },
    filters: [
      { text: "关闭", value: "关闭" },
      { text: "运行中", value: "运行中" },
      { text: "已上线", value: "已上线" },
      { text: "异常", value: "异常" }
    ]
  },
  {
    title: "更新时间",
    dataIndex: "time",
    scopedSlots: { customRender: "time" }
  },
  {
    title: "操作",
    key: "action",
    scopedSlots: { customRender: "action" }
  }
];
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  }
};
export default {
  name: "table",
  data() {
    return {
      data: [],
      pagination: {},
      loading: false,
      columns,
      rowSelection,
      expose: false
    };
  },
  methods: {
    handleTableChange(pagination, filters, sorter) {
      console.log(pagination);
      const pager = { ...this.pagination };
      pager.current = pagination.current;
      this.pagination = pager;
      this.fetch({
        results: pagination.pageSize,
        page: pagination.current,
        sortField: sorter.field,
        sortOrder: sorter.order,
        ...filters
      });
    },
    fetch(params = {}) {
      console.log("params:", params);
      this.loading = true;
      this.$http.get("/api/table-list").then(res => {
        const pagination = { ...this.pagination };
        // Read total count from server
        // pagination.total = data.totalCount;
        console.log(res.data);
        pagination.total = 20;
        this.loading = false;
        console.log(res.data.data);
        this.data = res.data.data;
        this.pagination = pagination;
      });
    }
  },
  mounted() {
    this.fetch();
  }
};
</script>

