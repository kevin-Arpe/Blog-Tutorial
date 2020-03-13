import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch, useParams } from 'react-router-dom';
import Coding from './topics/coding';

class List extends React.Component {
    state = {
        item: [
            '', 'coding', 'englsh', 'exam', 'help', 'find'
        ],
        list: {
            coding: [
                {id: 'html', title: 'HTML'},
                {id: 'css', title: 'CSS'},
                {id: 'js', title: 'Javascript'}
            ],
            english: [
                {id: 'sentence', title: "Today's sentence"},
                {id: 'voca', title: "VOCA"}
            ]
        }
    };

    render() {
        return (
            <div className="navList">
                <Switch>
                    <Route exact path="/" />
                    <Route path="/coding"><Coding list={this.state.list.coding}/></Route>
                    <Route path="/english" />
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
            <List />
        </div>
    );
}

export default Container;