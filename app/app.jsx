var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');  // ES6 Destructuring Syntax
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

// ES5 Syntax
// var Route = require('react-router').Route;
// so basically the vars in the {} need to be == to the names of the properties you are "Destructuring"

// IndexRoute is a component in Router
ReactDOM.render(  // most common ReactDOM method
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={Weather}/>

			<Route path="examples" component={Examples}/>
			<Route path="about" component={About}/>

		</Route>
	</Router>,
	document.getElementById('app')
);

/*
*** JSX notes

*/
