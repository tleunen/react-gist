# react-gist

[![NPM](https://nodei.co/npm/react-gist.png)](https://nodei.co/npm/react-gist/)

Use this component to add a github gist on your website.

<p><details>
  <summary><b>Preview</b></summary>
  <p><img src="https://i.imgur.com/4EYDskB.png" /></p>
</details></p>

Get the id from the gist url `https://gist.github.com/{your_name}/{id}` and set it as a property of the component.

## Example

Single-file gist:

```js
var React = require('react');
var Gist = require('react-gist');

React.render(
    <Gist id='5104372' />,
    document.body
);
```

[![Edit react-gist-example-single-file](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/reactgistexamplesinglefile-z9vkc?fontsize=14)

Multi-file gist:

```js
var React = require('react');
var Gist = require('react-gist');

React.render(
    <Gist id='5995ea726914f280afb3' file='Chef-Dockerfile' />,
    document.body
);
```

[![Edit react-gist-example-multi-file](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/reactgistexamplemultifile-9rw4g?fontsize=14)

## Usage

### `<Gist id={string} file={string} />`

- `id` {string} Id of the gist
- `file` {string} Name of a specific file in a multi-file gist

## License

MIT, see [LICENSE.md](http://github.com/tleunen/react-gist/blob/master/LICENSE.md) for details.
