require('./css/base.css');
var React = require('react');
var ReactDOM = require('react-dom');
var SecurityChooser = require('./router/router');


ReactDOM.render(<SecurityChooser/>, document.getElementById('security'));
