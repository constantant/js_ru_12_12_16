interface IArticleProps {
    article: IArticle
}

interface IArticleScope {
    isOpen?: boolean,
    commentsIsShown?: boolean
}

interface IArticle {
    id: string,
    date: string,
    title: string,
    text: string,
    comments?: IComment[]
}

interface ICommentListProps {
    comments: IComment[]
}

interface ICommentListScope {
}

interface ICommentProps {
    data: IComment
}

interface ICommentScope {
}

interface IComment {
    id: number,
    user: string,
    text: string
}