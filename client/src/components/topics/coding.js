import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch, useParams } from 'react-router-dom';

const Coding = (props) => {
    let codingList = props.list;
    let lis = [];
    for (let i=0; i<codingList.length; i++) {
    lis.push(<li ley={codingList[i].id}><NavLink exact to={"/coding/"+codingList[i].id}>{codingList[i].title}</NavLink></li>)
    }

    return (
        <ul>
            {lis}
        </ul>
    );
}

export default Coding;