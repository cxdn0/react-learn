import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'
import CommentForm from './CommentForm'
import {connect} from 'react-redux'
import toggleOpen from '../decorators/toggleOpen'
// import {loadComments} from '../AC'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array,
        //from toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    componentWillReceiveProps() {

    }

    getBody({article: {comments = [], id}, isOpen}) {
        if (!isOpen) return null
        if (!comments.length) return (
            <div>
                <p>No comments yet</p>
                <CommentForm articleId = {id} />
            </div>
        )
        console.log(' _@@@ comments', comments)
        return (
            <div>
                <ul>
                    {comments.map(id => {
                        console.log('id', id)
                        return <li key={id}><Comment id = {id}/></li>})
                    }
                </ul>
                <CommentForm articleId = {id} />
            </div>
        )
    }

    render() {
        const { isOpen, toggleOpen, article } = this.props
        const articleId = article
        // console.log('this.props article.id', article.entities.id)
        const text = isOpen ? 'hide comments' : 'show comments'
        return (
            <div>
                <button onClick={toggleOpen}>{text}</button>
                {this.getBody({article, isOpen})}
            </div>
        )
    }

}

export default connect(null, { /*loadComments*/ })(toggleOpen(CommentList))