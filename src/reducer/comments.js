import {normalizedComments as defaulComments} from '../fixtures'
import { ADD_COMMENT } from '../constants'
import { arrToMap } from '../helpers'


export default (commentsState = arrToMap(defaulComments), action) => {
    const {type, payload} = action
    switch (type) {
    	case ADD_COMMENT:
    		// console.log('commentsState', commentsState)
    		// console.log('payload', payload)
    		const {randomId} = payload
    		return {
    			...commentsState,
    			[randomId]: {
    				...payload.comment,
    				id: randomId
    			}
    		}
    }

    return commentsState
}