import React from 'react';
import { NavLink, Route, Switch, useParams } from 'react-router-dom';

const Content = (props) => {
    let params = useParams();
    let topic_id = params.topic_id;
    let selected_topic = {}

    for (let i=0; i<props.home.length; i++) {
        if (props.home[i].id === topic_id) {
            selected_topic = props.home[i];
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

class Home extends React.Component {
    state = {
        home: []
    }

    componentDidMount() {
        fetch('home.json')
            .then(function(result) {
                return result.json();
            })
            .then(function(json) {
                this.setState({
                    home: json
                });
            }.bind(this))
    }

    render() {
        let lis = [];

        for (let i=0; i<this.state.home.length; i++) {
            lis.push(<li key={this.state.home[i].id}><NavLink exact to={"/home/"+this.state.home[i].id}>{this.state.home[i].title}</NavLink></li>)
        }

        return (
            <div className="content">
                <ul className="content_list">
                    {lis}
                </ul>
                <Switch>
                    <Route path="/home/:topic_id">
                        <Content home={this.state.home} />
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default Home;