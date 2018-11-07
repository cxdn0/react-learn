import {DELETE_ARTICLE, INCREMENT, CHANGE_SELECTION, CHANGE_DATE_RANGE} from '../constants'

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

export function changeSelect(selected) {
    return {
        type: CHANGE_SELECTION,
        payload: { selected }
    }
}

export function changeDate(dateRange) {
    return {
        type: CHANGE_DATE_RANGE,
        payload: { dateRange }
    }
}