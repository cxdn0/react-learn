import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Loader from './Loader'
import Comment from './Comment'
import {loadCommentsPage} from '../AC'
import {connect} from 'react-redux'
import {mapToArr} from '../helpers'
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'

class CommentsPage extends Component {

    componentDidMount() {
        console.log('-333-- DidMount')
        this.loadComments(this.props)
    }

    componentWillReceiveProps(nextProps) {
        console.log('-444-- WillReceiveProps')
        this.loadComments(nextProps)
    }


    loadComments(props) {
        const { loadCommentsPage, page: page = 1, pagesLoading, pagesLoaded } = props
        if (!pagesLoading.has(page) && !pagesLoaded.has(page)) loadCommentsPage(page)
    }

    render() {
        const { comments, page: page = 1, pagesLoading, pagesLoaded, total } = this.props
        const offset = (page-1)*5
        // console.log(total, page, pagesLoading.has(page), pagesLoaded.has(page), (pagesLoading.has(page) || !pagesLoaded.has(page)))
        if(!total) return <Loader />
    
        const pages = Math.ceil(total/5)

        if (pagesLoading.has(page) || !pagesLoaded.has(page)) return (
            <div>
                {getPaginator(pages)}
                <Loader />
            </div>
        )
        return (
            <div>
                {getPaginator(pages)}
                {getBody({comments: comments.filter(comment => comment.page==page)})}
                {getPaginator(pages)}
            </div>
        )
    }
}

CommentsPage.propTypes = {
    // from props
    page: PropTypes.string,
    // from connect
    comments: PropTypes.array.isRequired,
    // pagesLoading: PropTypes.array.isRequired,
    // pagesLoaded: PropTypes.array.isRequired,
    total: PropTypes.number
}

function getBody({comments}) {
    return (
        <div>
            <ul>
                {comments.map(({id}) => <li key={id}><Comment id = {id}/></li>)}
            </ul>
        </div>
    )
}

function getPaginator(pages) {
    let links = []
    const commentsURL = '/comments'
    const isStartPage = location.pathname === commentsURL
    const activeStyle = {color: 'red'}
    for(let i=1; i<=pages; i++)
        links.push(<NavLink activeStyle = {activeStyle} style = {isStartPage && i==1 ? activeStyle : {}} key={i} to={`${commentsURL}/${i}`}>{i} </NavLink>)
    
    return (
        <div>
            {links}
        </div>
        )
}

export default connect((state) => {
    return {
        comments: mapToArr(state.comments.entities),
        pagesLoading: state.comments.pagesLoading,
        pagesLoaded: state.comments.pagesLoaded,
        total: state.comments.total
    }
}, { loadCommentsPage })(CommentsPage)