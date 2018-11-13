import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'
import CommentForm from './CommentForm'
import {connect} from 'react-redux'
import toggleOpen from '../decorators/toggleOpen'
import {loadComments} from '../AC'
import {mapToArr} from '../helpers'
import Loader from './Loader'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.object,
        //from toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    componentWillReceiveProps({isOpen, loadComments, article: {id}, article, comments}) {
        console.log('...componentWillReceiveProps')
        if (isOpen && !comments.get(id)) loadComments(id)
    }

    getBody({article: {id}, article, isOpen, comments}) {
        // console.log('--- props.comments', this.props.comments)
        if (!isOpen) return null
        if (comments.get(id) && comments.get(id).loading) return <Loader/>
        if (!comments.get(id) || !comments.get(id).entities.size) return (
            <div>
                <p>No comments yet</p>
                <CommentForm articleId = {id} />
            </div>
        )
        // console.log(' _@@@ comments', comments)
        return (
            <div>
                <ul>
                    {mapToArr(comments.get(id).entities).map(comment => {
                        // console.log('id', id)
                        return <li key={comment.id}><Comment comment = {comment}/></li>})
                    }
                </ul>
                <CommentForm articleId = {id} />
            </div>
        )
    }

    render() {
        const { isOpen, toggleOpen, article, comments } = this.props
        const articleId = article
        // console.log('this.props article.id', article.entities.id)
        const text = isOpen ? 'hide comments' : 'show comments'
        return (
            <div>
                <button onClick={toggleOpen}>{text}</button>
                {this.getBody({article, isOpen, comments})}
            </div>
        )
    }

}

export default connect((state) => ({
    comments: state.comments
}), { loadComments })(toggleOpen(CommentList))