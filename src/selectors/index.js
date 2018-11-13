import {createSelector} from 'reselect'
import {mapToArr} from '../helpers'

const filtersGetter = state => state.filters
const articlesGetter = state => state.articles.entities
// const commentsGetter = state => {
// 	// console.log(' --... state', state)
// 	return state.comments
// }
const idGetter = (state, props) => props.comment

export const filtratedArticlesSelector = createSelector(articlesGetter, filtersGetter, (articles, filters) => {
    const {selected, dateRange: {from, to}} = filters

    return mapToArr(articles).filter(article => {
        const published = Date.parse(article.date)
        return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > from && published < to))
    })
})

export const commentSelectorFactory = () => createSelector(/*commentsGetter,*/ idGetter, (comment) => {
	// console.log(' .. comment', comment)
    return comment
})