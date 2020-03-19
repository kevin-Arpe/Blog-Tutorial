import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch, useParams } from 'react-router-dom';
import Home from './topics/home';
import Coding from './topics/coding';
import English from './topics/english';

class Main extends React.Component {
    render() {
        return (
            <div className="content">
                <Switch>
                    <Route path="/home" component={ Home } />
                    <Route path="/coding" component={ Coding } />
                    <Route path="/english" component={ English } />
                    <Route path="/exam" />
                    <Route path="/help" />
                    <Route path="/find" />
                </Switch>
            </div>
        );
    }
}
// 위의 navList는 Route로 생성된 리스트기 때문에 exact path를 쓸 경우 정확히 path가 일치하지 않게 되어
// switch에 의해 리스트가 사라지게 된다!!!

const Container = () => {
    return (
        <div className="container">
            <Main />
        </div>
    );
}

export default Container;