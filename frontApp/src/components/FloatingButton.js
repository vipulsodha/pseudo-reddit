/**
 * Created by vipulsodha on 08/07/18.
 */

import React, { Component } from 'react';
import ReactDom from 'react-dom';

const styles = {
        floatingButton: {
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            height: '50px',
            width: '50px',
            borderRadius: '50%',
            backgroundColor: '#3c763d',
            cursor: 'pointer',
            color: 'white',
            fontSize: '32px',

        }
};

const FloatingButton = (props) => {

    return (
        <button style={styles.floatingButton} onClick={props.onClick}> + </button>
    )
};

export default FloatingButton;