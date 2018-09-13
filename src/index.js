import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './redux/store'
import {HashRouter, Switch, Route} from 'react-router-dom'
import Main from './containers/main/main'
import './mock/mockServer'
ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route component={Main}/>
      </Switch>
    </HashRouter>
  </Provider>


),document.getElementById('app'));