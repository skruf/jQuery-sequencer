/**
 * jQuery-Sequencer
 *
 * Created by Thomas Låver
 * http://www.laaver.com
 *
 * Version: 1.0.0
 * Requires: jQuery 1.6+
 *
 */

(function($) {

  $.fn.sequencer = function(options) {

    var self = this,
        images = [],
        sectionHeight,
        windowHeight,
        currentScroll,
        percentageScroll,
        image;

    for (var i = 0; i < options.count; i++) {
      images.push(options.path + "/" + i + "." + options.ext);
    }

    $(window).scroll(function(e) {
      sectionHeight = $(self).height();
      windowHeight = $(this).height();
      currentScroll = $(this).scrollTop();
      percentageScroll = 100 * currentScroll / (sectionHeight - windowHeight);
      image = Math.round(percentageScroll / 100 * options.count);
      if(image < options.count) {
        $("img.sequencer").attr("src", images[image]);
      }
    });

    return this;

  };

}(jQuery));
