# incase

## Install

Node:

```
npm install incase
```

Browser:

``` html
<script src="https://raw.github.com/viatropos/incase/master/index.js"></script>
```

## Usage

``` javascript
var incase = require('incase')
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
  incase.camelCase(string)      // "fooBar"
  incase.snakeCase(string)      // "foo_bar"
  incase.constantCase(string)   // "FOO_BAR"
  incase.classCase(string)      // "FooBar"
  incase.namespaceCase(string)  // "Foo.Bar"
  incase.titleCase(string)      // "Foo Bar"
  incase.paramCase(string)      // "foo-bar"
  incase.pathCase(string)       // "foo/bar"
  incase.dotCase(string)        // "foo.bar"
});
```

## Contribute

```
git clone git://github.com/viatropos/incase.git
cd incase
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
