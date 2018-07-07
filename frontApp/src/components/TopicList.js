/**
 * Created by vipulsodha on 07/07/18.
 * This component wraps around the Topic component, takes topics list as prop
 */


import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Topic from './Topic';

const TopicList = ({topics, onUpVoteClick, onDownVoteClick}) => {

    if (topics === undefined || topics === null || topics.length === 0) {
        return null;
    }

    return (
        <div>
            {
                topics.map((topic) => <Topic {...topic} onUpVoteClick={onUpVoteClick} onDownVoteClick={onDownVoteClick} />)
            }
        </div>
    )
};

export default TopicList;
