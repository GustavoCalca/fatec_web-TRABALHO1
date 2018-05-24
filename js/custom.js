jQuery(document).ready(function( $ ) {
  // Hero rotating texts
  $("header .intro-text .skills").Morphext({
    animation: "flipInX",
    separator: ",",
    speed: 2000
  });
});