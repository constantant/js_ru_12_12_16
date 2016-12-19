import React, {PropTypes} from 'react'
import toggleOpenArticle from '../decorators/toggleOpenArticle'
import Article from './Article'
import Chart from './Chart'

export class ArticleList extends React.Component {
	static propTypes = {
		articles: PropTypes.array.isRequired,
		toggleOpenArticle: PropTypes.func.isRequired,
		openArticleId: PropTypes.string
	};

    render() {
        const {articles, toggleOpenArticle, openArticleId} = this.props;
        const articleElements = articles.map(article =>
            <li key={article.id}>
                <Article article={article}
                         isOpen={openArticleId == article.id}
                         onClick={()=>toggleOpenArticle(article.id)}
                />
            </li>);
        return (
            <div>
                <h2>Article List</h2>
                <ul>
                    {/*some comment*/}
                    {articleElements}
                </ul>
                <Chart articles={articles}/>
            </div>
        )
    }
}

export default toggleOpenArticle(ArticleList);

