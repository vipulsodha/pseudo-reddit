/**
 * Created by vipulsodha on 10/07/18.
 */

import React, { Component } from 'react';
import ReactDom from 'react-dom';


const styles = {

    loader: {
        fontSize: '28px'
    }
};

class Loader extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loadingText: 'Loading'
        };
    }

    componentDidMount() {

        let stopper = this.state.loadingText + '....';

        this.interval = window.setInterval(() => {

            let newState = this.state.loadingText === stopper ? 'Loading' : this.state.loadingText + '.';

            this.setState({loadingText: newState});

        }, 500);
    }

    componentWillUnmount() {

        window.clearInterval(this.interval);
    }

   render() {

        return (
            <div style={styles.loader}>
                {this.state.loadingText}
            </div>
        )
   }
};

export default Loader;