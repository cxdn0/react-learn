import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {commentSelectorFactory} from '../selectors'

function Comment({id, comment}) {
    // console.log(' ----- comment', comment)

    {/*return (<div></div>)*/}

    return (
        <div>
            <p>{comment.get('text')} <b>by {comment.get('user')}</b></p>
        </div>
    )
}

Comment.propTypes = {
    id: PropTypes.string.isRequired,
    //from connect
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired
    }).isRequired
}

const mapStateToProps = () => {
    const commentSelector = commentSelectorFactory()

    return (state, ownProps) => {
        return {
            comment: commentSelector(state, ownProps)
        }
    }
}

export default connect(mapStateToProps)(Comment)