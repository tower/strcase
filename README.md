# tcase

## Install

Node:

```
npm install tcase
```

Browser:

``` html
<script src="https://raw.github.com/viatropos/tcase/master/index.js"></script>
```

## Usage

``` javascript
var tcase = require('tcase')
  , cases = [
      'fooBar'
    , 'foo_bar'
    , 'FOO_BAR'
    , 'FooBar'
    , 'Foo.Bar'
    , 'Foo Bar'
    , 'foo-bar'
    , 'foo/bar'
    , 'foo.bar'
  ]

cases.forEach(function(string) {
  tcase.camelCase(string)      // "fooBar"
  tcase.snakeCase(string)      // "foo_bar"
  tcase.constantCase(string)   // "FOO_BAR"
  tcase.classCase(string)      // "FooBar"
  tcase.namespaceCase(string)  // "Foo.Bar"
  tcase.titleCase(string)      // "Foo Bar"
  tcase.paramCase(string)      // "foo-bar"
  tcase.pathCase(string)       // "foo/bar"
  tcase.dotCase(string)        // "foo.bar"
});
```

## Contribute

```
git clone git://github.com/viatropos/tcase.git
cd tcase
npm install
```

### Test

Requires `mocha`, `chai`, and `phantomjs`:

```
brew install phantomjs
npm install mocha -g
npm install phantomjs chai
```

## MIT License

Copyright &copy; 2013 [Lance Pollard](http://twitter.com/viatropos) <lancejpollard@gmail.com>
 
Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
