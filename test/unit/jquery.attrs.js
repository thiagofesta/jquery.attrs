describe('Testing $.fn.attrs', function() {

  it('should have the attrs plugin and should works', function() {
    expect($.fn.attrs).toBeDefined();
    expect($.fn.attrs).toEqual(jasmine.any(Function));

    // Test default
    $('body').append('<div id="element1" data-color="red" data-checked="true" ng-click="clickFn()" enabled></div>');
    expect($('#element1').attrs()).toEqual({
      'id': 'element1',
      'data-color': 'red',
      'data-checked': 'true',
      'ng-click': 'clickFn()',
      'enabled': ''
    });

    // Testing with no element
    expect($('#element-notfound').attrs()).toEqual({});
  });

});
