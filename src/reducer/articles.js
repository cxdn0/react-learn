import {normalizedArticles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE, ADD_COMMENT} from '../constants'
import { arrToMap } from '../helpers'

export default (articleState = arrToMap(defaultArticles), action) => {
    const {type, payload} = action

    switch (type) {
        case DELETE_ARTICLE:
        	const tmpState = {...articleState}
        	delete tmpState[payload.id]
        	return tmpState
        case ADD_COMMENT:
        	const {articleId, randomId} = payload
        	const article = articleState[articleId]
        	// console.log('article in reducer', article)
        	// console.log('action in reducer', action)
        	// console.log('articleState in reducer', articleState)
        	// console.log('return __ ', {
        	// 	...articleState,
        	// 	[articleId]: {
        	// 		...article,
        	// 		comments: (article.comments || []).concat(randomId)
        	// 	}})
        	return {
        		...articleState,
        		[articleId]: {
        			...article,
        			comments: (article.comments || []).concat(randomId)
        		}
        	}
    }

    return articleState
}