import React, {Component} from 'react'
import CommentList from './CommentList'

export default class Article extends Component {

	state = {
		isOpen: false,
		commentsIsShown: false
	};

	render() {
		const {article} = this.props;
		return (
			<div>
				<h3 onClick={() => this.toggleOpen()}>{article.title}</h3>
				{this.getBody()}
			</div>
		)
	}

	toggleOpen() {
		this.setState({
			isOpen: !this.state.isOpen
		})
	};

	toggleComments() {
		this.setState({
			commentsIsShown: !this.state.commentsIsShown
		})
	}

	getBody() {
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

	getButton() {
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

	getComments() {
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
