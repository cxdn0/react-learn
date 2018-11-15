import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer'
import logger from '../middlewares/logger'
import limitoffset from '../middlewares/limitoffset'
import randomId from '../middlewares/randomId'
import api from '../middlewares/api'
import thunk from 'redux-thunk'

const enhancer = applyMiddleware(thunk, limitoffset, randomId, api, logger)

const store = createStore(reducer, {}, enhancer)

//dev only
window.store = store

export default store