import {normalizedComments as defaulComments} from '../fixtures'
import {} from '../constants'

const commentsMap = defaulComments.reduce((acc, comment) => {
    acc[comment.id] = comment
    return acc
}, [])
console.log('commentsMap', commentsMap instanceof Array, commentsMap)

export default (commentsState = commentsMap, action) => {
    const {type, payload} = action

    switch (type) {
    }

    return commentsState
}