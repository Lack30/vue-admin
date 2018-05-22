<template>
    <div ref="c1"></div>
</template>

<script>
import G2 from '@antv/g2'
import DataSet from '@antv/data-set'
export default {
  mounted() {
    const data = [
      { country: "Lithuania", litres: 501.9 },
      { country: "Czech Republic", litres: 301.9 },
      { country: "Ireland", litres: 201.1 },
      { country: "Germany", litres: 165.8 },
      { country: "Australia", litres: 139.9 },
      { country: "Austria", litres: 128.3 },
      { country: "UK", litres: 99 },
      { country: "Belgium", litres: 60 },
      { country: "The Netherlands", litres: 50 }
    ];

    const ds = new DataSet();
    const dv = ds
      .createView()
      .source(data)
      .transform({
        type: "percent",
        field: "litres",
        dimension: "country",
        as: "percent"
      });

    const chart = new G2.Chart({
      container: this.$refs.c1,
      width: 370,
      height: 285,
      padding: [20, 100, 20, 10]
    });
    chart.source(dv);
    chart.coord("theta", {
      innerRadius: 0.6,
      radius: 1
    });
    chart.tooltip({
      showTitle: false, // 不展示标题
      itemTpl:
        '<li data-index={index}><span style="color:{color}">{name}:</span>{value}</li>'
    });
    chart.legend({
      useHtml: true,
      position: "right",
      containerTpl:
        '<div class="g2-legend">' +
        '<table class="g2-legend-list" style="list-style-type:none;margin:0;padding:0;"></table>' +
        "</div>",
      itemTpl: (value, color, checked, index) => {
        const obj = dv.rows[index];
        checked = checked ? "checked" : "unChecked";
        return (
          '<tr class="g2-legend-list-item item-' +
          index +
          " " +
          checked +
          '" data-value="' +
          value +
          '" data-color=' +
          color +
          ' style="cursor: pointer;font-size: 14px;">' +
          '<td width=150 style="border: none;padding:0;"><i class="g2-legend-marker" style="width:10px;height:10px;display:inline-block;margin-right:10px;background-color:' +
          color +
          ';"></i>' +
          '<span class="g2-legend-text">' +
          value +
          "</span></td>" +
          '<td style="text-align: right;border: none;padding:0;">' +
          obj.litres +
          "</td>" +
          "</tr>"
        );
      },
    });
    chart.filter("country", val => {
      return val !== "UK";
    });
    chart
      .intervalStack()
      .position("percent")
      .color("country", [
        "#67b7dc",
        "#84b761",
        "#fdd400",
        "#cc4748",
        "#cd82ad",
        "#2f4074",
        "#448e4d",
        "#b7b83f",
        "#b9783f"
      ])
      .style({
        lineWidth: 2,
        stroke: "#fff"
      });
    chart.render();
  }
};
</script>

