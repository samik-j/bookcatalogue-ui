import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from "./pages/Home";
import Header from "./Header";

const App: React.FC = () => {

    return (
        <BrowserRouter>
            <div>
                <Header/>
                <article>

                <Switch>
                    <Route path="/" component={Home} exact/>
                </Switch>
                </article>
            </div>
        </BrowserRouter>
    );

};

export default App;
