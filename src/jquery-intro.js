(function ($) {

  $.fn.asciibot = function( botId ) {
    return this.each( function() {
      $( this ).text( oneBot(botId) );
      return this;
    });
  };

  var robots = 