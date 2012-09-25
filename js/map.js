var map;

$(document).ready(function() {

  
  var layer = new L.StamenTileLayer("toner");
  
  var map = new L.Map("map", {
      center: new L.LatLng(37.7, -122.4),
      zoom: 12
  });
  map.addLayer(layer);

});





// var map;

// $("#mappage").live('pageinit', function() {

//   resizeMap();

//   var resizeTimer;
//   $(window).resize(function() {
//     clearTimeout(resizeTimer);
//     resizeTimer = setTimeout(resizeMap, 100);
//   });

//   setTimeout(function() {

//     var toner = new L.StamenTileLayer("toner");

//     var map = new L.Map("map", {
//         center: new L.LatLng(37.7, -122.4),
//         zoom: 12
//     });
    
//     map.addLayer(toner);
//     map.redraw(true);



//   }, 400);


// });

// function resizeMap() {

//   var mapheight = $(window).height();
//   var mapwidth = $(window).width();
//   $("#map").height(mapheight);
//   $("#map").width(mapwidth);

// }



