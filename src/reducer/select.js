import {SELECT_FILTER} from '../constants'

export default (selectedState = [], action) => {
    const {type, payload} = action
	// console.log('payload', payload);
    switch (type) {
        case SELECT_FILTER: return Object.assign(selectedState, payload)
    }

    return selectedState
}