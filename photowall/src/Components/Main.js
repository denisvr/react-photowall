import React, { Component } from 'react';
import Title from "./Title";
import PhotoWall from './PhotoWall.js';
import AddPhoto from './AddPhoto.js';
import { Route, Link } from 'react-router-dom';
import { removePost } from '../redux/actions';

class Main extends Component {

    constructor() {
        super()
    }
    componentDidMount() {

    }
    render() {
        return (
            <div>
                <h1>
                    <Link to="/"> PhotoWall</Link>
                </h1>
                <Route exact path="/" render={() => (
                    <div>
                        <PhotoWall {...this.props} />
                    </div>
                )} />
                {/* <Route path='/create' render={(params) => (<AddPost {...this.props}{...params} />)} /> */}
                <Route path="/AddPhoto" render={({ history }) => (
                    <AddPhoto  {...this.props} onHistory={history} />
                )} />
            </div>
        )
    }
}

export default Main