import React from 'react';
import { NavLink, Route, Switch, useParams } from 'react-router-dom';

function Content(props) {
    let params = useParams();
    let topic_id = params.topic_id;
    let selected_topic = {}

    for (let i=0; i<props.exams.length; i++) {
        if (props.exams[i].id === topic_id) {
            selected_topic = props.exams[i];
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

class Exam extends React.Component {
    state = {
        exams: []
    }

    componentDidMount() {
        fetch('exam.json')
         .then(function(result) {
             return result.json();
         })
         .then(function(json) {
             this.setState({
                 exams: json
             });
         }.bind(this))
    }
    
    render() {
        let lis = [];

        for (let i=0; i<this.state.exams.length; i++) {
        lis.push(<li key={this.state.exams[i].id}><NavLink exact to={"/exam/"+this.state.exams[i].id}>{this.state.exams[i].title}</NavLink></li>)
        }

        return (
            <div className="content">
                <ul className="content_list">
                    {lis}
                </ul>
                <Switch>
                    <Route path="/exam/:topic_id">
                        <Content exams={this.state.exams} />
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default Exam;