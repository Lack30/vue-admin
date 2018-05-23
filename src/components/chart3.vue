<template>
    <div ref="c1"></div>
</template>

<script>
import G2 from '@antv/g2'
import DataSet from '@antv/data-set'
export default {
  mounted() {
    var _DataSet = DataSet,
      DataView = _DataSet.DataView;

    var data = [
      { item: "Design", a: 70, b: 30, c: 100 },
      { item: "Development", a: 60, b: 70, c: 30 },
      { item: "Marketing", a: 50, b: 60, c: 12 },
      { item: "Users", a: 40, b: 50, c: 78 },
      { item: "Test", a: 60, b: 70, c: 22 },
    ];
    var dv = new DataView().source(data);
    dv.transform({
      type: "fold",
      fields: ["a", "b"], // 展开字段集
      key: "user", // key字段
      value: "score" // value字段
    });
    var chart = new G2.Chart({
      container: this.$refs.c1,
      forceFit: true,
      height: 300,
      padding: [20, 20, 20, 20]
    });
    chart.source(dv, {
      score: {
        min: 0,
        max: 80
      }
    });
    chart.coord("polar", {
      radius: 0.8
    });
    chart.axis("item", {
      line: null,
      tickLine: null,
      grid: {
        lineStyle: {
          lineDash: null
        },
        hideFirstLine: false
      }
    });
    chart.axis("score", {
      line: null,
      tickLine: null,
      grid: {
        type: "polygon",
        lineStyle: {
          lineDash: null
        },
        alternateColor: "rgba(0, 0, 0, 0.04)"
      }
    });
    chart.legend("user", {
      marker: "circle",
      offset: 30
    });
    chart
      .line()
      .position("item*score")
      .color("user")
      .size(2);
    chart
      .point()
      .position("item*score")
      .color("user")
      .shape("circle")
      .size(4)
      .style({
        stroke: "#fff",
        lineWidth: 1,
        fillOpacity: 1
      });
    chart.render();
  }
};
</script>

