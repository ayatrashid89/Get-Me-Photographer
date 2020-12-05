import React, { Component } from 'react';
import Photos from './photo';
import Home from './home';

export default class Main extends Component {
    render() {
        return (
            <div>
                <Home />
                <Photos />
            </div>
        )
    }
}
