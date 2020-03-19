import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch, useParams } from 'react-router-dom';

const navs = [
    {id: 'home', name: "HOME"},
    {id: 'coding', name: "CODING"},
    {id: 'english', name: "ENGLISH"},
    {id: 'exam', name: "EXAMINATAION"},
    {id: 'help', name: "HELP"},
    {id: 'find', name: "FIND"}
  ];

class Nav extends React.Component {
    render() {
      let navLis = [];
      for (let i=0; i<navs.length; i++) {
        navLis.push(<li key={navs[i].id} className="navItem"><NavLink exact to={"/"+navs[i].id}>{navs[i].name}</NavLink></li>);
      }
      //여기에서 navlis는 route가 아닌 link로 생성된 평범한 list의 형태로 구현되었기 때문에 path가
      //정확하게 일치하지 않아도 list에는 영향이 없다!!!
  
      return (
        <nav className="navigator">
          {navLis}
        </nav>
      );
    }
  }

  export default Nav;