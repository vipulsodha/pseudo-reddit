/**
 * Created by vipulsodha on 07/07/18.
 * Topic component, shows votes, topic title, etc
 */

import React, { Component } from 'react';
import ReactDom from 'react-dom';

import VoteButton from './VoteButton';

const styles = {
    topic: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        border: '1px solid black',
        height: 'auto',
        width: '100%'
    },
    voteBox: {
        flex:1,
        display: 'flex',
        border: '1px solid yellow',
        alignItems: 'center',
        justifyContent: 'center'

    },
    contentBox: {
        flex: 10,
        display:'flex',
        border: '1px solid blue',
        flexDirection:'column'
    },
    titleBox: {
        flex:3
    },
    contentInfoBox: {
        flex:1,
        border: '1px solid red',
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-evenly'
    }
};

class Topic extends Component {

    handleUpVoteClick = (e) => {
        this.props.onUpVoteClick(this.props.topicId);
    }

    handleDownVoteClick = (e) => {
        this.props.onDownVoteClick(this.props.topicId);
    }

    render() {
        return (
            <div style={styles.topic}>
                <div style={styles.voteBox}>
                    <VoteButton onUpVoteClick={this.handleUpVoteClick} onDownVoteClick={this.handleDownVoteClick}/>
                </div>
                <div style={styles.contentBox}>
                    <div style={styles.titleBox}>
                        <h3>
                            {this.props.title}
                        </h3>
                    </div>
                    <div style={styles.contentInfoBox}>
                        <div>
                            <span>
                                Created at :
                            </span>
                            <span>
                                {this.props.createdTimeStamp}
                            </span>
                        </div>
                        <div>
                            <span>
                                Author :
                            </span>
                            <span>
                                {this.props.author}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Topic;
