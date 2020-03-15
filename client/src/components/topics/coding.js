import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch, useParams } from 'react-router-dom';

const codings = [
    {id: 'html', title: 'HTML', desc: 'HTML is...'},
    {id: 'css', title: 'CSS', desc: 'CSS is...'},
    {id: 'java', title: 'Javascript', desc: 'Javascript is...'}
];

function Content() {
    let params = useParams();
    let topic_id = params.topic_id;
    let selected_topic = {}

    for (let i=0; i<codings.length; i++) {
        if (codings[i].id === topic_id) {
            selected_topic = codings[i];
            console.log(selected_topic);
            break;
        }
    }

    return (
        <div>
            <h3>{selected_topic.title}</h3>
            <p>{selected_topic.desc}</p>
        </div>
    );
}

const Coding = (props) => {
    let lis = [];

    for (let i=0; i<codings.length; i++) {
    lis.push(<li key={codings[i].id}><NavLink exact to={"/coding/"+codings[i].id}>{codings[i].title}</NavLink></li>)
    }

    return (
        <div>
            <ul className="content_list">
                {lis}
            </ul>
            <div className="contents">
                <Switch>
                    <Route path="/coding/:topic_id">
                        <Content />
                    </Route>
                </Switch>
                <Content />
            </div>
        </div>
    );
}

export default Coding;