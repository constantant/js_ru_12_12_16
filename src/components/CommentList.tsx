import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Component} from 'react';

import {Comment} from './Comment'

export class CommentList extends Component<ICommentListProps, ICommentListScope> {
    render() {
        const comments = this.props.comments.map(
            comment => <Comment data={comment} key={comment.id}/>
        );

        return (
            <ul>
                {comments}
            </ul>
        )
    }
}