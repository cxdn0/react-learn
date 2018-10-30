import React, {Component} from 'react'
import Article from './Article'
import toggleOpen from '../decorators/toggleOpen'

class ArticleList extends Component {
    render() {
    	//const articleElements = this.props.articles.map(article => console.log('pppp', this.props) )
        const articleElements = this.props.articles.map(article => 
	        <li key={article.id}>
	            <Article
	                article = {article}
	                isOpen = {article.id === this.props.openArticleId}
	                toggleOpen = {this.props.toggleOpen(true, article.id)}
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