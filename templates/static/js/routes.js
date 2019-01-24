import React from 'react';
import { HashRouter, BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Article from './components/Article';
// import more components
export default (
    <BrowserRouter>
     <div>
        <header id="header" className="clearfix">

            <nav id="main-nav">
            <ul className="clearfix" id="options">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/article'>Article</Link></li>
            </ul>
            </nav>
        </header>
        <div class="main">
            <div class="main-inner">
                <div class="content">
                    <Route exact path='/' component={Home} />
                    <Route exact path='/article' component={Article} />
                </div>
            </div>
        </div>
     </div>
    </BrowserRouter>
);
