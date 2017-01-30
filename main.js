import React from 'react';
import ReactDOM from 'react-dom';
// import jsx from './App.jsx';
// import Hero from './App.jsx';
import App from './App.jsx';
import data from './data/data.js';



// let image = React.createElement('img', {src: 'https://facebook.github.io/react/img/logo.svg'})
// let title = React.createElement('h1', null, 'React!');
// let subtitle = React.createElement('p', null, 'Библиотека для создания пользовательских интерфейсов')

// let container = React.createElement('div', {className: 'container'}, image, title, subtitle)

// ReactDOM.render(container, document.getElementById("app"));

// ReactDOM.render(React.createElement(jsx, null), document.getElementById('app'));



ReactDOM.render( < App heroes={data}/>, document.getElementById('app'));




