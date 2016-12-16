import * as React from 'react';
import {Component} from 'react';

export class Comment extends Component<ICommentProps, ICommentScope> {
	public render() {
		const {user, text} = this.props.data;
		return (
			<li>
				<h4>{user}</h4>
				<p>{text}</p>
			</li>
		)
	}
}