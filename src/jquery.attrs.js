(function ($) {
  'use strict';

  $.fn.attrs = function() {

    var attrs = {};

    if(this.length) {
      $.each(this[0].attributes, function (i, attr) {
        attrs[attr.name] = attr.value;
      });
    }

    return attrs;
  };

})(jQuery);
