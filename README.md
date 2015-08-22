# jquery.attrs

[ ![Codeship Status for thiagofesta/jquery.attrs](https://img.shields.io/codeship/f8b62b10-29c2-0133-667f-2a28ff6ba00c.svg)](https://codeship.com/projects/98110) [![codecov.io](https://img.shields.io/codecov/c/github/thiagofesta/jquery.attrs.svg)](http://codecov.io/github/thiagofesta/jquery.attrs?branch=master) [![bower.io](https://img.shields.io/bower/v/jquery.attrs.svg)](http://bower.io/search/?q=jquery.attrs) [![npm](https://img.shields.io/npm/v/jquery.attrs.svg)](https://www.npmjs.com/package/jquery.attrs)

jQuery plugin for getting attributes from jQuery collections.

## Example

Given the HTML

```HTML
<div id="element1" data-color="red" data-checked="true" ng-click="clickFn()" enabled></div>
```

And the Javascript

```JavaScript
$('#element1').attrs();
/*
Outputs:
{
  'id': 'element1',
  'data-color': 'red',
  'data-checked': 'true',
  'ng-click': 'clickFn()',
  'enabled': ''
}
*/
```

## Testing

First you need to install the dependencies

    npm install

Now you are able to have the server up and running. Go and start the server

    grunt server
  

### Running tests

We have JSHint and Unit tests.
 
All of them can be run once using the following command
  
    grunt test
  
You can see the coverage on the command line output or more details opening the `test/coverage/index.html` file on your browser.

  
##### Running JSHint

For running JSHint

    grunt test:jshint
  

##### Running Unit Tests

For running unit tests

    grunt test:unit
  

### Building

For create a build run

    grunt build
  
This task will also make sure all tests are passing before making the build.
