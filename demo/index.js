var React = require('react');
var Gist = require('../index');

var g = React.render(
    <Gist id='5104372' />,
    document.body
);

// update the gist after 5 seconds
setTimeout(function() {
    g.setProps({id: '4702818'});
}, 5000);
