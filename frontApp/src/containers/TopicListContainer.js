/**
 * Created by vipulsodha on 07/07/18.
 */

import React, { Component } from 'react';
import ReactDom from 'react-dom';

import TopicList from '../components/TopicList';
import FloatingButton from '../components/FloatingButton';

import {getTopics} from '../utils/api';

const styles = {
    container: {
        width:'60%',
        margin: '0 auto'
    }
};

class TopicListContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            topics: []
        };
    }

    componentDidMount() {

        getTopics(0, 20, (err, topics) => {

            if (err != null) {
                alert("Something went wrong");
            }

            this.setState({topics});
        });
    }

    handleUpVoteClick = (topicId) => {
        console.log(topicId);
    }

    handleDownVoteClick = (topicId) => {
        console.log(topicId);
    }

    onNewTopicClick =(e) => {
        this.props.history.push('/add');
    }

    render() {

        return (
            <div style={styles.container}>
                <TopicList topics={this.state.topics} onUpVoteClick={this.handleUpVoteClick} onDownVoteClick={this.handleDownVoteClick} />
                <FloatingButton onClick={this.onNewTopicClick}/>
            </div>
        );
    }
};

export default TopicListContainer;
