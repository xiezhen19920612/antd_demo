import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import XiaoJieJie from "./XiaoJieJie";
import TodoList from "./TodoList";
import T1 from "./T1";
import AntdDemo from './AntdDemo'
import Demo from './Demo'
import Demo2 from './Demo2'

  
  function AppRouter() {
    return (
      <Router>
          <ul>
              <li> <Link to="/todolist">todolist</Link> </li>
              <li><Link to="/xiaojiejie">xiaojiejie</Link> </li>
              <li><Link to="/t1">t1</Link> </li>
              <li><Link to="/tree">AntdDemo</Link> </li>
          </ul>
          <Route path="/todolist" component={TodoList} />
          <Route path="/xiaojiejie" component={XiaoJieJie} />
          <Route path="/t1" component={T1} />
          <Route path="/tree" component={AntdDemo} />
          <Route path="/demo" component={Demo} />
          <Route path="/demo2" component={Demo2} />
      </Router>
    );
  }
  export default AppRouter;