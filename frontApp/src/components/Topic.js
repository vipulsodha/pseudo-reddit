/**
 * Created by vipulsodha on 07/07/18.
 */

import React, { Component } from 'react';
import ReactDom from 'react-dom';

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
        border: '1px solid black',
        height:'100px'
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

const Topic = (props) => {
    return (

        <div style={styles.topic}>
            <div style={styles.voteBox}> Vote</div>
            <div style={styles.contentBox}>
                <div style={styles.titleBox}>
                    <h3>
                        Title for topic
                    </h3>
                </div>
                <div style={styles.contentInfoBox}>
                    <div>
                        <span>
                            Created at :
                        </span>
                        <span>
                            Today
                        </span>
                    </div>
                    <div>
                        <span>
                            Author :
                        </span>
                        <span>
                            Vipul Sodha
                        </span>
                    </div>
                </div>
            </div>
        </div>

    )
};


export default Topic;


