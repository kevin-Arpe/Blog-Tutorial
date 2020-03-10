import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch, useParams } from 'react-router-dom';
import './App.css';
import Header from './components/header';

const contents = [
  {id: 'home', title: 'Home', desc: 'This page will contain text box for editing contents list.'},
  {id: 'html', title: 'HTML', desc: 'HTML is...'},
  {id: 'css', title: 'CSS', desc: 'CSS is...'},
  {id: 'java', title: 'Javascript', desc: 'Javascript is...'}
];

function Nav() {
  let lis = [];
  for (let i=0; i<contents.length; i++) {
    lis.push(<li key={contents[i].id} className="li"><NavLink exact to={"/"+contents[i].id}>{contents[i].title}</NavLink></li>)
  }
  
  return (
    <ul>
      {lis}
    </ul>
  );
}

function Topic() {
  let params = useParams();
  let topic_id = params.topic_id;
  let selected_topic = {
    title: "Sorry, fixing this page...",
    desc: "Not found 404."
  }
  
  for (let i=0; i<contents.length; i++) {
    if (contents[i].id === topic_id) {
      selected_topic = contents[i];
      break;
    }
  }
  return (
    <div>
      <h2>{selected_topic.title}</h2>
      <p>{selected_topic.desc}</p>
    </div>
  );
}

function Content() {
  return (
    <article>
      <Switch>
        <Route exact path="/:topic_id">
          <Topic></Topic>
        </Route>
      </Switch>
    </article>
  );
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <div className="container">
            <nav className="navigator">
              <Nav />
            </nav>
            <div className="article">
              <Content />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
