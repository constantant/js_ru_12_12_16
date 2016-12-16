import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Component} from 'react';

export class Comment extends Component<ICommentProps, ICommentScope> {
	render() {
		const {user, text} = this.props.data;
		return (
			<li>
				<h4>{user}</h4>
				<p>{text}</p>
			</li>
		)
	}
}