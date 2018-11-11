import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {commentSelectorFactory} from '../selectors'

function Comment({comment}) {
    return (
        <div>
            <p>{comment.text} <b>by {comment.user}</b></p>
        </div>
    )
}

Comment.propTypes = {
    
    //from connect
    comment: PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired
    }).isRequired
}

// window.cntr.STP = 0
// window.cntr.FuncSTP = 0
const mapStateToProps = () => {
    const commentSelector = commentSelectorFactory()
    // window.cntr.STP++
    return (state, ownProps) => { // один раз возвращается для каждого экземпляра комментария и в дальнейшем для сравнения выполняется только эта функция (из замыкания)
        // window.cntr.FuncSTP++
        return {
            comment: commentSelector(state, ownProps)
        }
    }
}

export default connect(mapStateToProps)(Comment)