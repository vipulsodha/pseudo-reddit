/**
 * Created by vipulsodha on 07/07/18.
 */

import React, { Component } from 'react';
import ReactDom from 'react-dom';

import TopicList from '../components/TopicList';

const styles = {
    container: {
        width:'80%',
        margin: '0 auto'
    }
};

class TopicListContainer extends Component {

    state = {
        topics: [{
            title: 'Title',
            author: 'Vipul',
            upVotes: 100,
            downVotes: 100,
            createdTimeStamp: 1234,
            topicId: 1
        },
        {
            title: 'Title 1',
            author: 'Vipul',
            upVotes: 100,
            downVotes: 100,
            createdTimeStamp: 1234,
            topicId: 2
        },
        {
            title: 'Title 2',
            author: 'Vipul',
            upVotes: 100,
            downVotes: 100,
            createdTimeStamp: 1234,
            topicId: 3
        },
        {
            title: 'Title 3',
            author: 'Vipul',
            upVotes: 100,
            downVotes: 100,
            createdTimeStamp: 1234,
            topicId: 4
        },
        {
            title: 'Title 4',
            author: 'Vipul',
            upVotes: 100,
            downVotes: 100,
            createdTimeStamp: 1234,
            topicId: 5
        }]
    };

    componentDidMount() {

    }

    handleUpVoteClick = (topicId) => {
        console.log(topicId);
    }

    handleDownVoteClick = (topicId) => {
        console.log(topicId);
    }

    render() {

        return (
            <div style={styles.container}>
                <TopicList topics={this.state.topics} onUpVoteClick={this.handleUpVoteClick} onDownVoteClick={this.handleDownVoteClick} />
            </div>
        );
    }
};

export default TopicListContainer;
