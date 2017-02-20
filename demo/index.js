var React = require('react');
var Gist = require('../index');

var g = React.render(
    <Gist id='bedde975e6e92a77e2321487ba45f313' />,
    document.body
);

// update the gist after 5 seconds
setTimeout(function() {
    g.setProps({id: '5995ea726914f280afb3', file: 'Chef-Dockerfile'});
}, 5000);
