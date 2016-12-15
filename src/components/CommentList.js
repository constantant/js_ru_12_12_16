import React, {Component} from 'react';
import Comment from './Comment'

export default class CommentList extends Component {
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