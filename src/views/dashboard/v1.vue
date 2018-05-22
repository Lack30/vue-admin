<template>
    <div id='v1' class="mx-3 mt-4">
        <a-row :gutter="16">
            <a-col :span="6">
                <div class="card">
                    <div>
                        <span class="text-black-50">总销售额</span>
                        <a-tooltip class="float-right">
                            <template slot='title'>
                                指标说明
                            </template>
                            <a-icon type="info-circle-o" />
                        </a-tooltip>
                        <h1 class="text-dark">¥ 126,560</h1>
                    </div>
                    <div class="content border-bottom mt-3 pb-4">
                        <div class="d-inline-block mr-2">
                            周同比
                            <span class="text-dark">11%</span>
                            <a-icon type="caret-up" class="text-success" />
                        </div>
                        <div class="d-inline-block">
                            日环比
                            <span class="text-dark">12%</span>
                            <a-icon type="caret-down" class="text-danger" />
                        </div>
                    </div>
                    <div class="mt-2">
                        <span class="text-black-50">日均销售额</span>
                        <span class="text-dark">￥12,423</span>
                    </div>
                </div>
            </a-col>
            <a-col :span="6">
                <div class="card">
                    <div>
                        <span class="text-black-50">访问量</span>
                        <a-tooltip class="float-right">
                            <template slot='title'>
                                指标说明
                            </template>
                            <a-icon type="info-circle-o" />
                        </a-tooltip>
                        <h1 class="text-dark">8,864</h1>
                    </div>
                    <div class="content border-bottom pb-2">
                        <Chart :typed="'area'"></Chart>
                    </div>
                    <div class="mt-2">
                        <span class="text-black-50">日访问量</span>
                        <span class="text-dark">2,423</span>
                    </div>
                </div>
            </a-col>
            <a-col :span="6">
                <div class="card">
                    <div>
                        <span class="text-black-50">支付笔数</span>
                        <a-tooltip class="float-right">
                            <template slot='title'>
                                指标说明
                            </template>
                            <a-icon type="info-circle-o" />
                        </a-tooltip>
                        <h1 class="text-dark">6,564</h1>
                    </div>
                    <div class="content border-bottom pb-2">
                        <Chart :typed="'interval'"></Chart>
                    </div>
                    <div class="mt-2">
                        <span class="text-black-50">转化率</span>
                        <span class="text-dark">60%</span>
                    </div>
                </div>
            </a-col>
            <a-col :span="6">
                <div class="card">
                    <div>
                        <span class="text-black-50">运营活动效果</span>
                        <a-tooltip class="float-right">
                            <template slot='title'>
                                指标说明
                            </template>
                            <a-icon type="info-circle-o" />
                        </a-tooltip>
                        <h1 class="text-dark">78%</h1>
                    </div>
                    <div class="content border-bottom mt-3 pb-4">
                        <a-tooltip title="目标值80%">
                            <a-progress :percent="80" :successPercent="30" />
                        </a-tooltip>
                    </div>
                    <div class="mt-2">
                        <div class="d-inline-block mr-2">
                            周同比
                            <span class="text-dark">11%</span>
                            <a-icon type="caret-up" class="text-success" />
                        </div>
                        <div class="d-inline-block">
                            日环比
                            <span class="text-dark">12%</span>
                            <a-icon type="caret-down" class="text-danger" />
                        </div>
                    </div>
                </div>
            </a-col>
        </a-row>
        <a-row class="mt-4">
            <a-col>
                <div class="card p-0" style="">
                    <a-tabs defaultActiveKey="1" size="large">
                        <a-tab-pane tab="销售额" key="1">
                            <div class="card-body pt-0 pb-2 pl-4 pr-4">
                                <a-row :gutter="16">
                                    <a-col :span="18">
                                        <h4>销售额趋势</h4>
                                        <Chart1></Chart1>
                                    </a-col>
                                    <a-col :span="6">
                                        <h4>门店销售额排名</h4>
                                        <div>
                                            <span class="d-block text-center p-2">
                                                <span class="float-left bg-dark text-light rounded-circle" style="width: 20px; height: 20px;">1</span>
                                                <span>工专路 0 号店</span>
                                                <span class="float-right">323,234</span>
                                            </span>
                                            <span class="d-block text-center p-2">
                                                <span class="float-left bg-dark text-light rounded-circle" style="width: 20px; height: 20px;">2</span>
                                                <span>工专路 0 号店</span>
                                                <span class="float-right">323,234</span>
                                            </span>
                                            <span class="d-block text-center p-2">
                                                <span class="float-left bg-dark text-light rounded-circle" style="width: 20px; height: 20px;">3</span>
                                                <span>工专路 0 号店</span>
                                                <span class="float-right">323,234</span>
                                            </span>
                                            <span class="d-block text-center p-2">
                                                <span class="float-left bg-light text-dark rounded-circle" style="width: 20px; height: 20px;">4</span>
                                                <span>工专路 0 号店</span>
                                                <span class="float-right">323,234</span>
                                            </span>
                                            <span class="d-block text-center p-2">
                                                <span class="float-left bg-light text-dark rounded-circle" style="width: 20px; height: 20px;">5</span>
                                                <span>工专路 0 号店</span>
                                                <span class="float-right">323,234</span>
                                            </span>
                                            <span class="d-block text-center p-2">
                                                <span class="float-left bg-light text-dark rounded-circle" style="width: 20px; height: 20px;">6</span>
                                                <span>工专路 0 号店</span>
                                                <span class="float-right">323,234</span>
                                            </span>
                                            <span class="d-block text-center p-2">
                                                <span class="float-left bg-light text-dark rounded-circle" style="width: 20px; height: 20px;">7</span>
                                                <span>工专路 0 号店</span>
                                                <span class="float-right">323,234</span>
                                            </span>
                                            <span class="d-block text-center p-2">
                                                <span class="float-left bg-light text-dark rounded-circle" style="width: 20px; height: 20px;">8</span>
                                                <span>工专路 0 号店</span>
                                                <span class="float-right">323,234</span>
                                            </span>
                                        </div>
                                    </a-col>
                                </a-row>
                            </div>
                        </a-tab-pane>
                        <a-tab-pane tab="访问量" key="2">
                            <div class="card-body pt-0 pb-2 pl-4 pr-4">
                                <a-row :gutter="16">
                                    <a-col :span="18">
                                        <h4>访问量趋势</h4>
                                        <Chart1></Chart1>
                                    </a-col>
                                    <a-col :span="6">
                                        <h4>门店访问量排名</h4>
                                        <div>
                                            <span class="d-block text-center p-2">
                                                <span class="float-left bg-dark text-light rounded-circle" style="width: 20px; height: 20px;">1</span>
                                                <span>工专路 0 号店</span>
                                                <span class="float-right">323,234</span>
                                            </span>
                                            <span class="d-block text-center p-2">
                                                <span class="float-left bg-dark text-light rounded-circle" style="width: 20px; height: 20px;">2</span>
                                                <span>工专路 0 号店</span>
                                                <span class="float-right">323,234</span>
                                            </span>
                                            <span class="d-block text-center p-2">
                                                <span class="float-left bg-dark text-light rounded-circle" style="width: 20px; height: 20px;">3</span>
                                                <span>工专路 0 号店</span>
                                                <span class="float-right">323,234</span>
                                            </span>
                                            <span class="d-block text-center p-2">
                                                <span class="float-left bg-light text-dark rounded-circle" style="width: 20px; height: 20px;">4</span>
                                                <span>工专路 0 号店</span>
                                                <span class="float-right">323,234</span>
                                            </span>
                                            <span class="d-block text-center p-2">
                                                <span class="float-left bg-light text-dark rounded-circle" style="width: 20px; height: 20px;">5</span>
                                                <span>工专路 0 号店</span>
                                                <span class="float-right">323,234</span>
                                            </span>
                                            <span class="d-block text-center p-2">
                                                <span class="float-left bg-light text-dark rounded-circle" style="width: 20px; height: 20px;">6</span>
                                                <span>工专路 0 号店</span>
                                                <span class="float-right">323,234</span>
                                            </span>
                                            <span class="d-block text-center p-2">
                                                <span class="float-left bg-light text-dark rounded-circle" style="width: 20px; height: 20px;">7</span>
                                                <span>工专路 0 号店</span>
                                                <span class="float-right">323,234</span>
                                            </span>
                                            <span class="d-block text-center p-2">
                                                <span class="float-left bg-light text-dark rounded-circle" style="width: 20px; height: 20px;">8</span>
                                                <span>工专路 0 号店</span>
                                                <span class="float-right">323,234</span>
                                            </span>
                                        </div>
                                    </a-col>
                                </a-row>
                            </div>
                        </a-tab-pane>
                        <div slot="tabBarExtraContent" class="p-2">
                            <a-button @click="ChangeDate(1)">今日</a-button>
                            <a-button @click="ChangeDate(7)">本周</a-button>
                            <a-button @click="ChangeDate(30)">本月</a-button>
                            <a-button @click="ChangeDate(365)">全年</a-button>
                            <a-range-picker v-model="dateTime" />
                        </div>
                    </a-tabs>
                </div>
            </a-col>
        </a-row>
        <a-row :gutter="16" class="mt-4">
            <a-col :span="12">
                <a-card title="线上热门搜索">
                    <a-row :gutter="64">
                        <a-col :span="12">
                            <div>
                                <span class="text-black-50">搜索用户数</span>
                                <a-tooltip>
                                    <template slot='title'>
                                        指标文案
                                    </template>
                                    <a-icon type="info-circle-o" />
                                </a-tooltip>
                                <div>
                                    <h1 class="text-dark d-inline">
                                        16,560
                                    </h1>
                                    <span class="text-dark ml-2 text-muted">17.2%</span>
                                    <a-icon type="caret-up" class="text-success" />
                                </div>
                                <div>
                                    <Chart typed="area"></Chart>
                                </div>
                            </div>
                        </a-col>
                        <a-col :span="12">
                            <div>
                                <span class="text-black-50">人均搜索次数</span>
                                <a-tooltip>
                                    <template slot='title'>
                                        指标文案
                                    </template>
                                    <a-icon type="info-circle-o" />
                                </a-tooltip>
                                <div>
                                    <h1 class="text-dark d-inline">
                                        2.7
                                    </h1>
                                    <span class="text-dark ml-2 text-muted">26.2</span>
                                    <a-icon type="caret-down" class="text-danger" />
                                </div>
                                <div>
                                    <Chart typed="area"></Chart>
                                </div>
                            </div>
                        </a-col>
                    </a-row>
                    <a-table bordered size="small" class="mt-2" :columns="columns" :dataSource="data">
                        <a slot="name" slot-scope="text" href="#">{{text}}</a>
                        <span slot="customTitle">
                            <a-icon type="smile-o" /> Name</span>
                        <span slot="action" slot-scope="text, record">
                            <a href="#">Action 一 {{record.name}}</a>
                        </span>
                    </a-table>
                </a-card>
            </a-col>
            <a-col :span="12">
                <a-card title="销售额类别占比">
                    <a-radio-group class="position-relative" defaultValue="a" size="small" slot="extra">
                        <a-radio-button value="a">全部渠道</a-radio-button>
                        <a-radio-button value="b">线上</a-radio-button>
                        <a-radio-button value="c">门店</a-radio-button>
                    </a-radio-group>
                    <h4>销售额</h4>
                    <Chart2></Chart2>
                </a-card>
            </a-col>
        </a-row>
    </div>
</template>

<script>
import moment from "moment";

const columns = [
  {
    dataIndex: "name",
    key: "name",
    slots: { title: "customTitle" },
    scopedSlots: { customRender: "name" }
  },
  {
    title: "Age",
    dataIndex: "age",
    width: 100,
    key: "age"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "Action",
    key: "action",
    scopedSlots: { customRender: "action" }
  }
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park"
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park"
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park"
  }
];

export default {
  name: "v1",
  data() {
    return {
      dateTime: [moment(new Date() - 3600 * 24 * 1000), moment(new Date())],
      data,
      columns
    };
  },
  methods: {
    ChangeDate(day) {
      this.dateTime = [
        moment(new Date() - 3600 * 24 * 1000 * day),
        moment(new Date())
      ];
    }
  },
  mounted() {},
  components: {
    Chart: resolve => require(["../../components/chart"], resolve),
    Chart1: resolve => require(["../../components/chart1"], resolve),
    Chart2: resolve => require(["../../components/chart2"], resolve)
  }
};
</script>

<style  scoped>
.card {
  background: #fff;
  padding: 20px 24px 8px;
}
</style>
