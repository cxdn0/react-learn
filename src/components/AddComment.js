import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './addcomment.css'

class AddComment extends Component {
	static propTypes = {

	}

	state = {
		username: '',
		comment: ''
	}

    render() {
        const ulen = this.state.username.length
        const clen = this.state.comment.length
    	const usernameWarnClass = ((ulen>0 && ulen<5) || ulen>15) ? 'input-warning' : ''
    	const commentWarnClass = ((clen>0 && clen<20) || clen>50) ? 'fixed-width input-warning' : 'fixed-width'

    	return (
    		<div>
    			<div>
    				<input type = 'text' className = {usernameWarnClass} value = {this.state.username} onChange = {this.handleNewCommentUserChange} />
    			</div>
    			<div>
    				<textarea type = 'text' className = {commentWarnClass} value = {this.state.comment} onChange = {this.handleNewCommentTextChange} />
    			</div>
    		</div>
    		)
}

    handleNewCommentUserChange = ev => {
    	this.setState({
    		username: ev.target.value
    	})
    }

    handleNewCommentTextChange = ev => {
        this.setState({
    		comment: ev.target.value
    	})
    }
}

export default AddComment