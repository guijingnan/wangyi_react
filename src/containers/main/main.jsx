import React, {Component} from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import './css/reset.css'
import './main.styl'
import Home from '../Home/Home'
import Knowledge  from '../Knowledge/Knowledge'
import Classify from '../Classify/Classify'
import ShoppingCart from '../ShoppingCart/ShoppingCart'
import Personal  from '../Personal/Personal'
import FooterGuider from '../../components/FooterGuider/FooterGuider'
export default class Main extends Component {
  NavList = [
    {
      path:'home'
    },
    {
      path:'knowledge'
    },
    {
      path:'classify'
    },
    {
      path:'shoppingcart'
    },
  ];
  render() {
    const navList = this.NavList;
    const path = this.props.location.pathname;
    const currentNav = navList.find(nav =>{return nav.path===path.split('/')[1]});
    return (
      <div className="mainWrap">
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/knowledge' component={Knowledge}/>
          <Route path='/classify' component={Classify}/>
          <Route path='/shoppingcart' component={ShoppingCart}/>
          <Route path='/personal' component={Personal}/>
          <Redirect to='/home'/>
        </Switch>
        {currentNav?  <FooterGuider/>: null}

      </div>
    )
  }
}
