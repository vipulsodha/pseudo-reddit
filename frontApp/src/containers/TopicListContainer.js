/**
 * Created by vipulsodha on 07/07/18.
 */

import React, { Component } from 'react';
import ReactDom from 'react-dom';

import TopicList from '../components/TopicList';
import FloatingButton from '../components/FloatingButton';
import Loader from '../components/Loader';
import {Link} from 'react-router-dom';


import {getTopics, increaseDownVoteCount, increaseUpVoteCount} from '../utils/api';

const styles = {
    container: {
        width:'60%',
        margin: '0 auto'
    },
    loader: {
        width: '100%',
        marginTop:'100px',
        textAlign: 'center'
    }
};

class TopicListContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            topics: [],
            loading: true
        };
    }

    componentDidMount() {

        getTopics(0, 20, (err, topics) => {

            if (err != null) {
                alert("Something went wrong");
            }

            this.setState({topics, loading:false});
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
                {
                    this.state.loading === true ?
                        <div style={styles.loader}><Loader/></div>
                        :
                        this.state.topics.length === 0 ?
                            <div style={styles.loader}>No Topics. <Link to="/add"> Click </Link>to add topics</div>
                            :
                            <TopicList topics={this.state.topics} onUpVoteClick={this.handleUpVoteClick} onDownVoteClick={this.handleDownVoteClick} />
                }
                <FloatingButton onClick={this.onNewTopicClick}/>
            </div>
        );
    }
};

export default TopicListContainer;
