/**
 * Created by vipulsodha on 07/07/18.
 */

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import  {HashRouter as Router, Route} from 'react-router-dom';




import TopicListContainer from '../containers/TopicListContainer';
import  AddTopicContainer from '../containers/AddTopicContainer';

class App extends Component {

    render() {
        return (

            <Router>
                <div>
                    <Route path="/" exact component={TopicListContainer}/>
                    <Route path="/add" component={AddTopicContainer}/>
                </div>
            </Router>
        );
    }
};

export default App;
