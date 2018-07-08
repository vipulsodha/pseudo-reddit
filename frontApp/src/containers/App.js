/**
 * Created by vipulsodha on 07/07/18.
 */

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import  {HashRouter as Router, Route} from 'react-router-dom';

import TopicListContainer from '../containers/TopicListContainer';
import  AddTopicContainer from '../containers/AddTopicContainer';
import Header from '../components/Header';

class App extends Component {

    render() {
        return (

            <div>
                <Router>
                    <div>
                        <Header/>
                        <Route path="/" exact component={TopicListContainer}/>
                        <Route path="/add" component={AddTopicContainer}/>
                    </div>
                </Router>
            </div>
        );
    }
};

export default App;
