import {DELETE_ARTICLE, INCREMENT, SELECT_FILTER, DATERANGE_FILTER} from '../constants'

export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function selectFilter(selected) {
	// console.log('selected', selected);
    return {
        type: SELECT_FILTER,
        payload: selected
    }
}

export function dateFilter(date) {
	// console.log('selected', selected);
    return {
        type: DATERANGE_FILTER,
        payload: date
    }
}