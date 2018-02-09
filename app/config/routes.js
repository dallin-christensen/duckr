import React from 'react'
// import { Router, Route } from 'react-router'
import { HashRouter, Route } from 'react-router-dom'
import { MainContainer } from '../containers'

console.log(HashRouter);
console.log('xxxxxx');
const routes = (
  <HashRouter>
    <Route path='/' component={MainContainer} />
  </HashRouter>
)


export default routes
