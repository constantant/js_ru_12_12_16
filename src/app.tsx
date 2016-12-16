import * as React from 'react';
import * as ReactDOM from 'react-dom';

import ArticleList from './components/ArticleList';
import {articles} from './fixtures';

ReactDOM.render(
    <ArticleList articles={articles as IArticle[]}/>,
    document.getElementById('container')
);