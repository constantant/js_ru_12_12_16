import * as React from 'react';
import {Component} from 'react';
import {CommentList} from './CommentList';

export class Article extends Component<IArticleProps, IArticleScope> {

    public state = {
        isOpen: false,
        commentsIsShown: false
    };

    public render() {
        const {article} = this.props;
        return (
            <div>
                <h3 onClick={() => this.toggleOpen()}>{article.title}</h3>
                {this.getBody()}
            </div>
        )
    }

    public toggleOpen() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    public toggleComments() {
        this.setState({
            commentsIsShown: !this.state.commentsIsShown
        })
    }

    public getBody() {
        if (!this.state.isOpen) {
            return null;
        }

        return (
            <section>
                {this.props.article.text}
                <div>
                    {this.getButton()}
                    {this.getComments()}
                </div>
            </section>
        )
    }

    public getButton() {
        const comments = this.props.article.comments;

        if (
            !comments ||
            comments.length === 0
        ) {
            return null;
        }

        const text = this.state.commentsIsShown ? 'Hide comments' : 'Show comments';
        return <button onClick={() => this.toggleComments()}>{text} ({comments.length})</button>
    }

    public getComments() {
        if (!this.state.commentsIsShown) {
            return null;
        }

        return (
            <div>
                <CommentList comments={this.props.article.comments}/>
            </div>
        )
    }
}
