import React, {Component} from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import PropTypes from 'prop-types'

function CommentList({comments = [], isOpen, toggleOpen}) {
    //console.log('isOpen', isOpen)
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
        <div>
            <button onClick={toggleOpen()}>{text}</button>
            {getBody({comments, isOpen})}
        </div>
    )
}

CommentList.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object),
    isOpen: PropTypes.bool,
    //isOpen: PropTypes.object.isRequired,
    toggleOpen: PropTypes.func.isRequired
}

function getBody({comments, isOpen}) {
    if (!isOpen) return null
    if (!comments.length) return <p>No comments yet</p>

    return (
        <ul>
            {comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)}
        </ul>
    )
}

getBody.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object),
    isOpen: PropTypes.bool.isRequired
}

export default toggleOpen(CommentList)