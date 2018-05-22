<template>
    <div ref="c1"></div>
</template>

<script>
import G2 from '@antv/g2'
export default {
  mounted() {
    "use strict";

    var data = [
      { month: "1月", sales: 38 },
      { month: "2月", sales: 52 },
      { month: "3月", sales: 61 },
      { month: "4月", sales: 145 },
      { month: "5月", sales: 48 },
      { month: "6月", sales: 38 },
      { month: "7月", sales: 38 },
      { month: "8月", sales: 31 },
      { month: "9月", sales: 20 },
      { month: "10月", sales: 138 },
      { month: "11月", sales: 238 },
      { month: "12月", sales: 10 },
    ];
    var chart = new G2.Chart({
      container: this.$refs.c1,
      forceFit: true,
      height: 300,
      padding: [10, 30, 30, 40],
    });
    chart.source(data);
    chart.scale("sales", {
      tickInterval: 20
    });
    chart.interval().position("month*sales");
    chart.render();
  }
};
</script>

