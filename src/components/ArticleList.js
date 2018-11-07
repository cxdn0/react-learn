import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import accordion from '../decorators/accordion'
import {connect} from 'react-redux'

class ArticleList extends Component {
    static propTypes = {
        //from connect
        articles: PropTypes.array.isRequired,
        //from accordion
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired
    }
    render() {
        const { articles, openItemId, toggleOpenItem } = this.props
        const articleElements = articles.map(article => <li key={article.id}>
            <Article
                article = {article}
                isOpen = {article.id === openItemId}
                toggleOpen = {toggleOpenItem(article.id)}
            />
        </li>)

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default connect(state => {
    console.log('state.articles', state.articles)
    console.log('state.filters', state.filters)
    let {selected, dateRange: {from, to}} = state.filters
    from = (from ? from.getTime() : from)
    to = (to ? to.getTime() : to)
    //window.timefrom = []
    let filteredArticles = state.articles.filter(article => {
        let published = Date.parse(article.date)
        console.log('published', published, 'from', from, to, article.date > from)
        //window.timefrom.push(from)
        return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > from && published < to))
    })

    return {
        articles: filteredArticles
    }
})(accordion(ArticleList))