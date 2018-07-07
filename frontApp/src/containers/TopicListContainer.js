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
        topics: [1,2,3,4,1,1,1,1,1,1,1]
    };

    componentDidMount() {

    }

    render() {

        return (
            <div style={styles.container}>
                <TopicList topics={this.state.topics} />
            </div>
        );

    }

};

export default TopicListContainer;
