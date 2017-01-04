import { INCREMENT, DELETE_ARTICLE,	FILTER_ARTICLE } from '../constants'

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

export function filterArticle(from, to, ids) {
    return {
        type: FILTER_ARTICLE,
        payload: { from, to, ids }
    }
}