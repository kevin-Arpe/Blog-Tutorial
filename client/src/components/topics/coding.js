import React from 'react';
import { NavLink, Route, Switch, useParams } from 'react-router-dom';

function Content(props) {
    let params = useParams();
    let topic_id = params.topic_id;
    let selected_topic = {}

    for (let i=0; i<props.codings.length; i++) {
        if (props.codings[i].id === topic_id) {
            selected_topic = props.codings[i];
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

class Coding extends React.Component {
    state = {
        codings: []
    }

    componentDidMount() {
        fetch('coding.json')
         .then(function(result) {
             return result.json();
         })
         .then(function(json) {
             this.setState({
                 codings: json
             });
         }.bind(this))
    }
    
    render() {
        let lis = [];

        for (let i=0; i<this.state.codings.length; i++) {
        lis.push(<li key={this.state.codings[i].id}><NavLink exact to={"/coding/"+this.state.codings[i].id}>{this.state.codings[i].title}</NavLink></li>)
        }

        return (
            <div className="content">
                <ul className="content_list">
                    {lis}
                </ul>
                <Switch>
                    <Route path="/coding/:topic_id">
                        <Content codings={this.state.codings} />
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default Coding;