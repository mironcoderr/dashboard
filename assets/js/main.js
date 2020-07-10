
//For menu fixed when scrolling
$(window).on('scroll', function(){
  var scroll = $(this).scrollTop();
  if(scroll > 30) {
    $(".header__bar").addClass("header__fixed");
  }else {
    $(".header__bar").removeClass("header__fixed");
  }
})


// For dropdown sidebar menu collaspe
jQuery(document).ready(function($){
  var panels = $(".sidebar__dropdown").hide();
  
   $(".sidebar__link").click(function(){
       var $this = $(this);
       panels.slideUp();
       $this.next().slideDown();
   });
});


// Scroll plugin for content div
$(function() {  
    $(".language__menu, .notify__menu, .message__menu, #sidebar__part, .country__card, .seller__card").niceScroll({cursorcolor:"#8747ee"});
});



// // For content full width when click
// $(".header__icon").on('click', function(){
//   $("#sidebar__part").animate({left : "-250px"});
//   $("#header__part").animate({paddingLeft : "0px"});
//   $("#main__content").animate({paddingLeft : "0px"});
//   $("#footer__part").animate({paddingLeft : "0px"});
// });




// =================================
//      REAL TIME CHART START
// =================================
am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    var chart = am4core.create("realchart", am4charts.XYChart);
    
    chart.data = [{
     "country": "Dec",
     "visits": 2025
    }, {
     "country": "Nov",
     "visits": 1882
    }, {
     "country": "Oct",
     "visits": 1809
    }, {
     "country": "Sep",
     "visits": 1322
    }, {
     "country": "Agu",
     "visits": 1122
    }, {
     "country": "July",
     "visits": 1114
    }, {
     "country": "June",
     "visits": 984
    }, {
     "country": "May",
     "visits": 711
    }, {
     "country": "Apr",
     "visits": 665
    }, {
     "country": "Mar",
     "visits": 580
    }, {
     "country": "Feb",
     "visits": 443
    }, {
     "country": "Jan",
     "visits": 441
    }];
    
    chart.padding(40, 40, 40, 40);
    
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.minGridDistance = 60;
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.grid.template.disabled = true;
    
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.extraMax = 0.1;
    //valueAxis.rangeChangeEasing = am4core.ease.linear;
    //valueAxis.rangeChangeDuration = 1500;
    
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = "country";
    series.dataFields.valueY = "visits";
    series.tooltipText = "{valueY.value}"
    series.columns.template.strokeOpacity = 0;
    series.columns.template.column.cornerRadiusTopRight = 10;
    series.columns.template.column.cornerRadiusTopLeft = 10;
    //series.interpolationDuration = 1500;
    //series.interpolationEasing = am4core.ease.linear;
    var labelBullet = series.bullets.push(new am4charts.LabelBullet());
    labelBullet.label.verticalCenter = "bottom";
    labelBullet.label.dy = -10;
    labelBullet.label.text = "{values.valueY.workingValue.formatNumber('#.')}";
    
    chart.zoomOutButton.disabled = true;
    
    // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
    series.columns.template.adapter.add("fill", function (fill, target) {
     return chart.colors.getIndex(target.dataItem.index);
    });
    
    setInterval(function () {
     am4core.array.each(chart.data, function (item) {
       item.visits += Math.round(Math.random() * 200 - 100);
       item.visits = Math.abs(item.visits);
     })
     chart.invalidateRawData();
    }, 2000)
    
    categoryAxis.sortBySeries = series;
    
    }); // end am4core.ready()

// =================================
//      REAL TIME CHART END
// =================================



// =================================
//     DONUT RADIAL CHART START
// =================================
    am4core.ready(function() {

        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end
        
        // Create chart instance
        var chart = am4core.create("donutchart", am4charts.PieChart);
        
        // Add data
        chart.data = [{
          "country": "Lithuania",
          "litres": 501.9
        }, {
          "country": "Czech Republic",
          "litres": 301.9
        }, {
          "country": "Ireland",
          "litres": 201.1
        }, {
          "country": "Germany",
          "litres": 165.8
        }, {
          "country": "Australia",
          "litres": 139.9
        }, {
          "country": "Austria",
          "litres": 128.3
        }, {
          "country": "UK",
          "litres": 99
        }, {
          "country": "Belgium",
          "litres": 60
        }, {
          "country": "The Netherlands",
          "litres": 50
        }];
        
        // Add and configure Series
        var pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "litres";
        pieSeries.dataFields.category = "country";
        pieSeries.innerRadius = am4core.percent(50);
        pieSeries.ticks.template.disabled = true;
        pieSeries.labels.template.disabled = true;
        
        var rgm = new am4core.RadialGradientModifier();
        rgm.brightnesses.push(-0.8, -0.8, -0.5, 0, - 0.5);
        pieSeries.slices.template.fillModifier = rgm;
        pieSeries.slices.template.strokeModifier = rgm;
        pieSeries.slices.template.strokeOpacity = 0.4;
        pieSeries.slices.template.strokeWidth = 0;

        chart.legend = new am4charts.Legend();
        chart.legend.position = "right";
        
    }); // end am4core.ready()

// =================================
//     DONUT RADIAL CHART END
// =================================



// =================================
//     COLUMN IMAGE CHART START
// =================================
    am4core.ready(function() {

      // Themes begin
      am4core.useTheme(am4themes_animated);
      // Themes end
      
      // Create chart instance
      var chart = am4core.create("columnchart", am4charts.XYChart);
      
      // Add data
      chart.data = [{
          "name": "John",
          "points": 35654,
          "color": chart.colors.next(),
          "bullet": "https://www.amcharts.com/lib/images/faces/A04.png"
      }, {
          "name": "Damon",
          "points": 65456,
          "color": chart.colors.next(),
          "bullet": "https://www.amcharts.com/lib/images/faces/C02.png"
      }, {
          "name": "Patrick",
          "points": 45724,
          "color": chart.colors.next(),
          "bullet": "https://www.amcharts.com/lib/images/faces/D02.png"
      }, {
          "name": "Mark",
          "points": 13654,
          "color": chart.colors.next(),
          "bullet": "https://www.amcharts.com/lib/images/faces/E01.png"
      }];
      
      // Create axes
      var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "name";
      categoryAxis.renderer.grid.template.disabled = true;
      categoryAxis.renderer.minGridDistance = 30;
      categoryAxis.renderer.inside = true;
      categoryAxis.renderer.labels.template.fill = am4core.color("#fff");
      categoryAxis.renderer.labels.template.fontSize = 20;
      
      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.renderer.grid.template.strokeDasharray = "4,4";
      valueAxis.renderer.labels.template.disabled = true;
      valueAxis.min = 0;
      
      // Do not crop bullets
      chart.maskBullets = false;
      
      // Remove padding
      chart.paddingBottom = 0;
      
      // Create series
      var series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = "points";
      series.dataFields.categoryX = "name";
      series.columns.template.propertyFields.fill = "color";
      series.columns.template.propertyFields.stroke = "color";
      series.columns.template.column.cornerRadiusTopLeft = 15;
      series.columns.template.column.cornerRadiusTopRight = 15;
      series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/b]";
      
      // Add bullets
      var bullet = series.bullets.push(new am4charts.Bullet());
      var image = bullet.createChild(am4core.Image);
      image.horizontalCenter = "middle";
      image.verticalCenter = "bottom";
      image.dy = 20;
      image.y = am4core.percent(100);
      image.propertyFields.href = "bullet";
      image.tooltipText = series.columns.template.tooltipText;
      image.propertyFields.fill = "color";
      image.filters.push(new am4core.DropShadowFilter());
      
    }); // end am4core.ready()

    // =================================
    //     COLUMN IMAGE CHART END
    // =================================
