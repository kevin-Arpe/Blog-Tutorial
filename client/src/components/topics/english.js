import React from 'react';
import { NavLink, Route, Switch, useParams } from 'react-router-dom';

function Content(props) {
    let params = useParams();
    let topic_id = params.topic_id;
    let selected_topic = {}

    for (let i=0; i<props.english.length; i++) {
        if (props.english[i].id === topic_id) {
            selected_topic = props.english[i];
            break;
        }
    }

    return (
        <div className="contents">
            <h3>{selected_topic.title}</h3>
            <p>{selected_topic.desc}</p>
        </div>
    );
}

class English extends React.Component {
    state = {
        english: []
    }

    componentDidMount() {
        fetch('english.json')
            .then(function(result) {
                return result.json();
            })
            .then(function(json) {
                this.setState({
                    english: json
                })
            }.bind(this))
    }

    render() {
        let lis = [];

        for (let i=0; i<this.state.english.length; i++) {
        lis.push(<li key={this.state.english[i].id}><NavLink exact to={"/english/"+this.state.english[i].id}>{this.state.english[i].title}</NavLink></li>)
        }

        return (
            <div className="content">
                <ul className="content_list">
                    {lis}
                </ul>
                <Switch>
                    <Route path="/english/:topic_id">
                        <Content english={this.state.english} />
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default English;