/**
 * Created by vipulsodha on 08/07/18.
 */


import React, { Component } from 'react';
import ReactDom from 'react-dom';

import {createNewTopic} from '../utils/api';

const styles = {
    container: {
        width:'60%',
        margin: '0 auto',
        display:'flex',
        flexDirection:'column'
    },
    textArea: {
        width: "100%",
        resize: 'none',
        display: 'block',
        overflow:'hidden',
        borderColor: 'rgb(237, 239, 241)',
        borderWidth: '1px',
        borderStyle: 'solid',
        height: '300px',
        fontSize: '16px',
        '&::focus': {
          outline: 'none'
        },
        marginBottom: '10px'
    },
    titleArea: {
        flex:'1'
    },
    formArea: {
        flex: '5',
        display: 'flex',
        flexDirection:'column'
    },
    button: {
        marginTop: '10px',
        width: '80px',
        fontSize: '16px',
        background: '#3498db',
        borderRadius: '5px',
        color: '#ffffff',
        textDecoration: 'none',
        padding: '10px 20px 10px 20px',
        outline:'none'
    },
    count: {
        fontSize:'16px',
        padding: '10px 20px 10px 20px',
        marginTop: '10px'
    },
    buttonArea: {
        display:'flex',
        justifyContent: 'space-between'
    }
};

class AddTopicContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {};
        this.state.topic = "";
        this.state.count = 255;
        this.state.submitDisabled = false;

        this.onTextChange = this.onTextChange.bind(this);
        this.submitPost = this.submitPost.bind(this);
    }

    onTextChange(e) {

        let text = e.target.value;

        this.setState({topic: text, count: (255 - text.length)});
    }

    submitPost(e) {

        if (this.state.topic.length > 255) {
            alert("Topic length should be less than 255");
            return;
        }

        if (this.state.topic.length === 0) {
            alert("Topic length should be at least 1");
            return;
        }

        this.setState({submitDisabled: true});

        let data = {
            title: this.state.topic
        };

        createNewTopic(data, (err) => {

            this.setState({submitDisabled: false});
            if(err !== null) {
                alert("Some error");
            } else {
                this.props.history.push('/');
            }
        });
    }

    render() {

        return (
            <div style={styles.container}>
                <div style={styles.titleArea}>
                    <h2>Post your Topic</h2>
                </div>
                <div style={styles.formArea}>
                    <textarea style={styles.textArea} onChange={this.onTextChange}>
                    </textarea>
                    <div style={styles.buttonArea}>
                        <span style={styles.count}> {this.state.count}</span>
                        <button style={styles.button} value={this.state.topic} onClick={this.submitPost} disabled={this.state.submitDisabled}>
                            Post
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddTopicContainer;