<template>
    <div ref="c1"></div>
</template>

<script>
const G2 = require("@antv/g2");
export default {
  name: "chart1",
  props:{
    typed: {
      type: String,
      default: 'line'
    }
  },
  mounted() {
    var data = [
      { year: "1991", value: 15468 },
      { year: "1992", value: 36100 },
      { year: "1993", value: 35900 },
      { year: "1994", value: 57409 },
      { year: "1995", value: 47200 },
      { year: "1996", value: 31056 },
      { year: "1997", value: 31982 },
      { year: "1998", value: 32040 },
      { year: "1999", value: 33233 }
    ];
    var chart = new G2.Chart({
      container: this.$refs.c1,
      forceFit: true,
      height: 35,
      padding: [0, 0, 0, 0]
    });
    chart.source(data);
    chart.scale({
      value: {
        min: 10000
      },
      year: {
        range: [0, 1]
      }
    });
    chart.axis(false);
    chart[this.typed]()
      .position("year*value")
    chart.render();
  }
};
</script>

