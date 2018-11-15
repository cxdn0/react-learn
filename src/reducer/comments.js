import {ADD_COMMENT, LOAD_ARTICLE_COMMENTS, LOAD_COMMENTS_PAGE, START, SUCCESS} from '../constants'
import {arrToMap} from '../helpers'
import {OrderedMap, Record, Set} from 'immutable'

const CommentRecord = Record({
    id: null,
    text: null,
    user: null,
    page: null
})

const ReducerState = Record({
	total: null,
	pagesLoading: new Set([]),
	pagesLoaded: new Set([]),
    entities: new OrderedMap({})
})

const defaultState = new ReducerState()

export default (commentsState = defaultState, action) => {
    const {type, payload, response, randomId} = action
    console.log('--- action', action)

    switch (type) {
        case ADD_COMMENT:
            return commentsState.setIn(['entities', randomId], new CommentRecord({...payload.comment, id: randomId}))

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return commentsState.update('entities', entities => entities.merge(arrToMap(response, CommentRecord)))

		case LOAD_COMMENTS_PAGE + START:
			return commentsState
            	.update('pagesLoading', pages => pages.add(payload.page))

        case LOAD_COMMENTS_PAGE + SUCCESS:
            return commentsState
            	.set('total', response.total)
            	.update('entities', entities => entities.merge(
            		arrToMap(response.records.map(record => ({...record, page: payload.page})), CommentRecord))
            	)
            	.update('pagesLoading', pages => pages.delete(payload.page))
            	.update('pagesLoaded', pages => pages.add(payload.page))
    }

    return commentsState
}