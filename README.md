# jquery.attrs

jQuery plugin for getting attributes from jQuery collections.

## Example

Given the HTML

```HTML
<div id="element1" data-color="red" data-checked="true" ng-click="clickFn()" enabled></div>
```

And the Javascript

```JavaScript
$('#element1').attr();
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
