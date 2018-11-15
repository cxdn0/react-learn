import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CommentsPage from '../CommentsPage'
import {Route, Switch} from 'react-router-dom'

class Comments extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <Switch>
                    <Route path = "/comments/:page" render = {this.getComments} />
                    <Route path = "/comments" render = {this.getComments} />
                </Switch>
            </div>
        )
    }

    getComments = ({ match }) => {
        const { page } = match.params
        return <CommentsPage page = {page} />
    }
}

export default Comments