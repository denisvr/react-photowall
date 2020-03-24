import React, { Component } from 'react';
import Title from "./Title";
import PhotoWall from './PhotoWall.js';
import AddPhoto from './AddPhoto.js';
import { Route, Link } from 'react-router-dom';
import { removePost } from '../redux/actions';
import Single from './Single';


class Main extends Component {

    state = { loading: true }

    componentDidMount() {
        this.props.startLoadingPost().then(() => {
            this.setState({loading: false})
        })
        this.props.startLoadingComments()
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
                <Route path="/AddPhoto" render={({ history }) => (
                    <AddPhoto  {...this.props} onHistory={history} />
                )} />
                <Route exact path="/single/:id" render={(params) => (
                    <div>
                        <Single loading={this.state.loading} {...this.props} {...params} />
                    </div>
                )} />
            </div>
        )
    }
}

export default Main