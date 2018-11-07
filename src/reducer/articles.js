import {normalizedArticles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE} from '../constants'

const articleMap = defaultArticles.reduce((acc, article) => {
	acc[article.id] = article
	return acc
}, [])
console.log('articleMap', articleMap instanceof Array, articleMap)
console.log('defaultArticles', defaultArticles instanceof Array, defaultArticles)

export default (articleState = articleMap, action) => {
    const {type, payload} = action

    switch (type) {
        case DELETE_ARTICLE: return articleState.filter(article => article.id !== payload.id)
    }

    return articleState
}