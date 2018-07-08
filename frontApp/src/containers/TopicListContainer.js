/**
 * Created by vipulsodha on 07/07/18.
 */

import React, { Component } from 'react';
import ReactDom from 'react-dom';

import TopicList from '../components/TopicList';
import FloatingButton from '../components/FloatingButton';

import {getTopics, increaseDownVoteCount, increaseUpVoteCount} from '../utils/api';

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

    handleUpVoteClick = (topicId, index) => {

        let newTopics = [...this.state.topics];
        newTopics[index].upVotes++;
        this.setState({topics: newTopics});

        increaseUpVoteCount(topicId, (err) => {
            if(err !== null) {
                alert("Something went wrong");
                newTopics[index].upVotes--;
                this.setState({topics: newTopics});
            }
        });
    }

    handleDownVoteClick = (topicId, index) => {

        let newTopics = [...this.state.topics];
        newTopics[index].downVotes++;
        this.setState({topics: newTopics});

        increaseDownVoteCount(topicId, (err) => {
            if(err !== null) {
                newTopics[index].downVotes--;
                this.setState({topics: newTopics});
            }
        });
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
