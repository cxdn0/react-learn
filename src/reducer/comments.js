import {normalizedComments as defaulComments} from '../fixtures'
import {ADD_COMMENT/*, LOAD_COMMENT, START, SUCCESS, FAIL*/} from '../constants'
import {arrToMap} from '../helpers'
import {OrderedMap, Record} from 'immutable'

const CommentRecord = Record({
    id: undefined,
    text: undefined,
    user: undefined
})

const commentsMap = arrToMap(defaulComments, CommentRecord)

export default (commentsState = commentsMap, action) => {
    const {type, payload, randomId} = action

    switch (type) {
        case ADD_COMMENT:
        	return commentsState.set(randomId, new CommentRecord({...payload.comment, id: randomId}))
            // return {...commentsState, [randomId]: payload.comment}
        // case LOAD_COMMENT + START:
        // 	return commentsState
        // case LOAD_COMMENT + SUCCESS:
        // 	return commentsState
    }

    return commentsState
}