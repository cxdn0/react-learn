import {normalizedComments as defaulComments} from '../fixtures'
import {ADD_COMMENT, LOAD_COMMENT, START, SUCCESS, FAIL} from '../constants'
import {arrToMap} from '../helpers'
import {OrderedMap, Record, Map} from 'immutable'

const CommentRecord = Record({
    id: undefined,
    text: undefined,
    user: undefined
})

const ArticleCommentsRecord = Record({
	loading: false,
	entities: new OrderedMap({})
})

const commentsMap = new OrderedMap() //arrToMap([], )

export default (commentsState = commentsMap, action) => {
    const {type, payload, response, randomId} = action

    switch (type) {
        case ADD_COMMENT:
        	const {comment} = payload
        	return commentsState.setIn([payload.articleId, 'entities', randomId], new CommentRecord({...comment, id: randomId}))

        case LOAD_COMMENT + START:
        	// console.log('commentsState.setIn([payload.articleId, loading], true)', commentsState.setIn([payload.articleId, 'loading'], true))
            return commentsState.set(payload.articleId, new ArticleCommentsRecord({'loading': true}))

        case LOAD_COMMENT + SUCCESS:
            return commentsState
            	.setIn([payload.articleId, 'entities'], arrToMap(payload.response, CommentRecord))
            	.setIn([payload.articleId, 'loading'], false)
    }

    return commentsState
}