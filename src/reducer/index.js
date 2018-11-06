import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import selectedArticle from './select'
import selectedDates from './daterange'

export default combineReducers({
    count: counterReducer,
    articles,
    selectedArticle,
    selectedDates
})