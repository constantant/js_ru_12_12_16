import { FILTER_ARTICLE } from '../constants'
import { articles } from '../fixtures'

export default (articlesState, action) => {
    const { type, payload } = action

    switch (type) {
            //не делай фильтрацию здесь. просто храни значения фильтров. А пофильтруешь уже в коннекте
        case FILTER_ARTICLE:
            const {from, to, ids} = payload;
            return articles.filter(article => {
                let byDate = true;
	            if (from && to) {
		            let date = new Date(article.date),
			            lq = date.valueOf() >= from.valueOf(),
			            rq = date.valueOf() <= to.valueOf();

		            byDate = date && lq && rq;
	            }

	            return byDate && (ids && ids.length ? (1 + ids.indexOf(article.id)) : true);
            });
    }

    return null
}
