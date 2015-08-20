/**
 * jQuery plugin for getting attributes from jquery collections.
 * @version v0.0.1-dev-2015-08-20
 * @link https://github.com/thiagofesta/jquery.attrs
 * @author Thiago Festa <thiagofesta@gmail.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
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
