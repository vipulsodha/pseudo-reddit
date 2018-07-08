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
        border: '2px solid #efeeee',
        height: 'auto',
        width: '100%',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    },
    voteBox: {
        flex:1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRight: '1px solid #d9d9d9',
        margin:'8px 0px'

    },
    contentBox: {
        flex: 5,
        display:'flex',
        flexDirection:'column'
    },
    titleBox: {
        flex:3,
        padding: '16px',
        overflowWrap: 'break-word'
    },
    contentInfoBox: {
        flex:1,
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        padding: '16px'
    },
    timeStampBox: {
        'alignSelf': 'center'
    }
};

class Topic extends Component {

    handleUpVoteClick = (e) => {
        this.props.onUpVoteClick(this.props.topicId, this.props.index);
    }

    handleDownVoteClick = (e) => {
        this.props.onDownVoteClick(this.props.topicId, this.props.index);
    }

    render() {
        return (
            <div style={styles.topic}>
                <div style={styles.voteBox}>
                    <VoteButton onUpVoteClick={this.handleUpVoteClick} onDownVoteClick={this.handleDownVoteClick} upVoteCount = {this.props.upVotes} downVotecount = {this.props.downVotes} />
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
                                <b>Author :</b>&nbsp;
                            </span>
                            <span>
                                {this.props.author}
                            </span>
                        </div>
                        <div style={styles.timeStampBox}>
                            <span>
                                <b>Created at :</b>&nbsp;
                            </span>
                            <span>
                                {new Date(this.props.createdTimeStamp).toLocaleDateString()}
                            </span>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Topic;
