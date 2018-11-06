import {DATERANGE_FILTER} from '../constants'

export default (dateRangeState = { from: null, to: null }, action) => {
    const {type, payload} = action
    console.log('payload', payload)
    console.log('dateRangeState', dateRangeState)
    switch (type) {
        case DATERANGE_FILTER: return Object.assign(dateRangeState, payload)
    }

    return dateRangeState
}