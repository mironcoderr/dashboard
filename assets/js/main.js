
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


// Bar chart
new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "jun", "Jul", "Agu", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#092381"],
          data: [2478,5267,734,784,433]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }
    }
});


//Doughnut chart
new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478,5267,734,784,433]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }
    }
});



// For content full width when click
$(".header__icon").on('click', function(){
  $("#sidebar__part").animate({left : "-250px"});
  $("#header__part").animate({paddingLeft : "0px"});
  $("#main__content").animate({paddingLeft : "0px"});
  $("#footer__part").animate({paddingLeft : "0px"});
});

