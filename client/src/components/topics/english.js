import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch, useParams } from 'react-router-dom';

function Content(props) {
    let params = useParams();
    let topic_id = params.topic_id;
    let selected_topic = {}

    for (let i=0; i<props.english.length; i++) {
        if (props.english[i].id === topic_id) {
            selected_topic = props.english[i];
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

class English extends React.Component {
    state = {
        english: []
    }

    render() {
        fetch('english.json')
            .then(function(result) {
                return result.json();
            })
            .then(function(json) {
                this.setState({
                    english: json
                })
            }.bind(this))

        let lis = [];

        for (let i=0; i<this.state.english.length; i++) {
        lis.push(<li key={this.state.english[i].id}><NavLink exact to={"/english/"+this.state.english[i].id}>{this.state.english[i].title}</NavLink></li>)
        }

        return (
            <div>
                <ul className="content_list">
                    {lis}
                </ul>
                <div className="contents">
                    <Switch>
                        <Route path="/english/:topic_id">
                            <Content english={this.state.english} />
                        </Route>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default English;