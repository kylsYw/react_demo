import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../HomePage';
import Demo1 from '../Demo1';
import Demo2 from '../Demo2';

export default class Router extends React.Component {
  render() {
    return <Switch>
      <Route path='/' exact component={HomePage}></Route>
      <Route path='/demo1' component={Demo1}></Route>
      <Route path='/demo2' component={Demo2}></Route>
    </Switch>;
  }
}
