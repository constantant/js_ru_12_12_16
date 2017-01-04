import { combineReducers } from 'redux'
import counterReducer from './counter'
import articlesReducer from './articles'
import  filterArticles from './filterArticles'

export default combineReducers({
    count: counterReducer,
    articles: articlesReducer,
	filteredArticles: filterArticles
})