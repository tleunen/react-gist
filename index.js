"use strict";

var React = require('react');

var Gist = React.createClass({
    propTypes: {
        id: React.PropTypes.string.isRequired,
        file: React.PropTypes.string
    },

    shouldComponentUpdate: function(nextProps) {
        return (this.props.id !== nextProps.id) || (this.props.file != nextProps.file);
    },

    componentDidMount: function() {
        this._updateIframeContent();
    },
    componentDidUpdate: function(prevProps, prevState) {
        this._updateIframeContent();
    },

    _calculateUrl: function() {
        if (this.props.file) {
            return 'https://gist.github.com/' + this.props.id + '.js?file=' + this.props.file
        } else {
            return 'https://gist.github.com/' + this.props.id + '.js'
        }
    },

    _updateIframeContent: function() {
        var iframe = this.refs.iframe.getDOMNode();

        var doc = iframe.document;
        if (iframe.contentDocument) doc = iframe.contentDocument;
        else if (iframe.contentWindow) doc = iframe.contentWindow.document;

        var gistLink = this._calculateUrl()
        var gistScript = '<script type="text/javascript" src="' + gistLink + '"></script>';
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
