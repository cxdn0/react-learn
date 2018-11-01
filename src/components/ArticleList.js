import React, {Component} from 'react'
import Article from './Article'
import toggleOpen from '../decorators/toggleOpen'
import PropTypes from 'prop-types'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.arrayOf(PropTypes.object).isRequired
    }

    render() {
    	//const articleElements = this.props.articles.map(article => console.log('pppp', this.props) )
        const articleElements = this.props.articles.map(article => 
	        <li key={article.id}>
	            <Article
	                article = {article}
	                isOpen = {article.id === this.props.isOpen}
	                toggleOpen = {this.props.toggleOpen(article.id)}
	            />
	        </li>
        )

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default toggleOpen(ArticleList)