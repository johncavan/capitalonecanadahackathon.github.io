$(function() {
  // Usage: mosaic(element, diffuse, ambient, numTriangles)
  new mosaic(document.getElementById('hero-mosaic'), [15, 58, 79], [25, 52, 65], 10);

  // Custom style for nav in index: Don't show a bottom border
  $('#header').css('border-bottom', '0');
  // Animate in nav elements
  $('#nav').addClass('fade-in');

  // Animate In hero elements
  $('#tagline').addClass('hero-animate-in');
  $('#event-info').addClass('hero-animate-in');
  $('#hero').addClass('hero-animate-in');
  $('#hero-register-cta').addClass('hero-animate-in');
  $('#learn-more').addClass('hero-animate-in');

  /*
   * Parallax "Apple TV" effect modified from:
   * https://webdesign.tutsplus.com/tutorials/apple-tvs-parallax-rollover-effect--cms-27233
   */
  $(document).on('mousemove', '#hero-interactive', function(e) {
    var halfW = ( this.clientWidth / 2 );
    var halfH = ( this.clientHeight / 2 );

    var coorX = ( halfW - ( event.pageX - this.offsetLeft ) );
    var coorY = ( halfH - ( event.pageY - this.offsetTop ) );

    var degX  = ( ( coorY / halfH ) * 10 ) + 'deg'; // max. degree = 10
    var degY  = ( ( coorX / halfW ) * -5 ) + 'deg'; // max. degree = 5

    console.log('(' + coorX + ', ' + coorY + ')');

    $(this).css('transform', function() {
      return 'perspective( 1500px ) translate3d( 0, -2px, 0 ) scale(1.03) rotateX('+ degX +') rotateY('+ degY +')';
    });
  });

  $(document).on('mouseout', '#hero-interactive', function() {
    $(this).removeAttr('style');
  });
});
