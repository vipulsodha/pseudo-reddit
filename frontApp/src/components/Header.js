/**
 * Created by vipulsodha on 09/07/18.
 */
import React, { Component } from 'react';
import ReactDom from 'react-dom';

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        height:'auto',
        marginBottom: '10px',
        padding: '15px',
        backgroundColor: '#EAEAEA',
        color: '#333'
    },
    title: {
        padding: '0px',
        margin: '0px'
    }
};

const Header = (props) => {

    return (
        <header style={styles.header}>
            <h2 style={styles.title}>pseudo-reddit</h2>
        </header>
    )
};

export default Header;