import {DELETE_ARTICLE, INCREMENT, CHANGE_SELECT, CHANGE_DATE_RANGE} from '../constants'

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
        type: CHANGE_SELECT,
        payload: { selected }
    }
}

export function changeDate(dateRange) {
    return {
        type: CHANGE_DATE_RANGE,
        payload: { dateRange }
    }
}