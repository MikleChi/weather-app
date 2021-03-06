import React, { lazy, Suspense } from 'react';
import {
  Route, Switch, BrowserRouter,
} from 'react-router-dom';
import WeatherContextProvider from './context/index';
import './App.css';

const SinglePage = lazy(() => import('./pages/singlepage'));
const MainPage = lazy(() => import('./pages/mainpage'));

const App = () => (
  <WeatherContextProvider>
    <div className="App">
      <Suspense fallback={<div>Loading</div>}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/:name" component={SinglePage} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  </WeatherContextProvider>
);

export default App;
