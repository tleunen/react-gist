# react-gist

[![NPM](https://nodei.co/npm/react-gist.png)](https://nodei.co/npm/react-gist/)

Use this component to add a github gist on your website.

Get the id from the gist url `https://gist.github.com/{your_name}/{id}` and set it as a property of the component.

## Example

```js
var React = require('react');
var Gist = require('react-gist');

React.render(
    <Gist id='5104372' />,
    document.body
);
```

## Usage

### `<Gist id={string} />`

- `id` {string} Id of the gist

## demo

To run the demo, install beefy and browserify:

`npm i beefy browserify -g`

Then:

`npm run demo`

## License

MIT, see [LICENSE.md](http://github.com/tleunen/react-gist/blob/master/LICENSE.md) for details.