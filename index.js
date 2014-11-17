"use strict";

var React = require('react');

var Gist = React.createClass({
    propTypes: {
        id: React.PropTypes.string.isRequired
    },

    shouldComponentUpdate: function(nextProps) {
        return this.props.id !== nextProps.id;
    },

    componentDidMount: function() {
        this._updateIframeContent();
    },
    componentDidUpdate: function(prevProps, prevState) {
        this._updateIframeContent();
    },

    _updateIframeContent: function() {
        var iframe = this.refs.iframe.getDOMNode();

        var doc = iframe.document;
        if (iframe.contentDocument) doc = iframe.contentDocument;
        else if (iframe.contentWindow) doc = iframe.contentWindow.document;

        var gistScript = '<script type="text/javascript" src="https://gist.github.com/' + this.props.id + '.js"></script>';
        var styles = '<style>*{font-size:12px;}</style>';
        var resizeScript = 'onload="parent.document.getElementById(\'gist-' + this.props.id + '\').style.height=document.body.scrollHeight + \'px\'"';
        var iframeHtml = '<html><head><base target="_parent">'+styles+'</head><body '+resizeScript+'>'+gistScript+'</body></html>';

        doc.open();
        doc.writeln(iframeHtml);
        doc.close();
    },

    render: function() {
        return React.createElement('iframe', {
            ref: 'iframe',
            width: '100%',
            frameBorder: 0,
            id: "gist-" + this.props.id
        });
    }
});

module.exports = Gist;
