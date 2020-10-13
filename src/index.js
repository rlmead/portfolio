import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header.js'
import NavBar from './components/NavBar.js'
import BlogPost from './components/BlogPost.js'
import ProjectButton from './components/ProjectButton.js'
import LinkButton from './components/LinkButton.js'
import Article from './components/Article.js'

ReactDOM.render(
  <React.StrictMode>
  <h1>also / and</h1>
{/* header */}
{/* navbar */}
{/* main:
    switch (state)
      case blog:
        for each object in blog.js:
          create new blog component using that data
      case projects:
        for each object in projects.js:
          create new projects component using that data
      case links:
        for each object in links.js:
          create new links component using that data
      case about:
        create new article component using data from about.js
*/}
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
