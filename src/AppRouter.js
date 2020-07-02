import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import XiaoJieJie from "./XiaoJieJie";
import TodoList from "./TodoList";
import T1 from "./T1";

  
  function AppRouter() {
    return (
      <Router>
          <ul>
              <li> <Link to="/todolist">todolist</Link> </li>
              <li><Link to="/xiaojiejie">xiaojiejie</Link> </li>
              <li><Link to="/t1">t1</Link> </li>
          </ul>
          <Route path="/todolist" component={TodoList} />
          <Route path="/xiaojiejie" component={XiaoJieJie} />
          <Route path="/t1" component={T1} />
      </Router>
    );
  }
  export default AppRouter;