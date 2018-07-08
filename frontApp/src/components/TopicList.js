/**
 * Created by vipulsodha on 07/07/18.
 * This component wraps around the Topic component, takes topics list as prop
 */


import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Topic from './Topic';

const styles = {
    innerContainer: {
        width: '100%',
        marginBottom:'12px',
        float:'left'
    }
};

const TopicList = ({topics, onUpVoteClick, onDownVoteClick}) => {

    if (topics === undefined || topics === null || topics.length === 0) {
        return null;
    }

    return (
        <div>
            {
                topics.map((topic) => (
                    <div style = {styles.innerContainer}>
                        <Topic {...topic} onUpVoteClick={onUpVoteClick} onDownVoteClick={onDownVoteClick} />
                    </div>
                ))
            }
        </div>
    )
};

export default TopicList;
