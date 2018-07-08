/**
 * Created by vipulsodha on 07/07/18.
 */

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {FaArrowUp, FaArrowDown} from 'react-icons/lib/fa';

const styles = {

    iconButton: {
        outline: 'none',
        border: 'none',
        cursor: 'pointer'
    }
};

const IconButton = (props) => {

    return (
        <button style={styles.iconButton} onClick={props.onClick}>
            {props.children}
        </button>
    )
};

const VoteButton = ({onUpVoteClick, onDownVoteClick, upVoteCount, downVotecount}) => {

    return (
        <div>
            <IconButton onClick={onUpVoteClick} >
                <FaArrowUp/>
            </IconButton>
            {upVoteCount}
            <br/>
            <hr/>
            <IconButton onClick={onDownVoteClick} >
                <FaArrowDown/>
            </IconButton>
            {downVotecount}
        </div>
    );
};

export default VoteButton;
