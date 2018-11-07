import {createSelector} from 'reselect'

const filtersGetter = state => state.filters
const articlesGetter = state => {
	console.log('state.articles', state.articles)
	return state.articles
}
const commentsGetter = state => state.comments
const idGetter = (state, props) => props.id



export const filtratedArticlesSelector = createSelector(articlesGetter, filtersGetter, (articles, filters) => {
    const {selected, dateRange: {from, to}} = filters
    // console.log('---', 'recomputing filtration')

        console.log('selector articles', articles)
        console.log('selected', selected)
        console.log('__', articles.length, articles.filter(article => {
	        const published = Date.parse(article.date)
	        console.log('return -- ')
	        return (!selected.length || selected.includes(article.id)) &&
	            (!from || !to || (published > from && published < to))
    	}))
	    return articles.filter(article => {
	        const published = Date.parse(article.date)
	        return (!selected.length || selected.includes(article.id)) &&
	            (!from || !to || (published > from && published < to))
    })
})

export const commentSelectorFactory = () => createSelector(commentsGetter, idGetter, (comments, id) => {
    console.log('---', 'getting comment', id)
    return comments[id]
})