import React, {Component, PropTypes} from 'react'

export default class CommentForm extends Component {
	static propTypes = {};

	state = {
		name: '',
		comment: ''
	};

	render() {
		return (
			<form onSubmit={(ev) => this.onSubmit(ev)}>
				<div>
					name: <input value={this.state.name} onChange={(ev) => this.setName(ev)}/>
				</div>
				<div>
					comment: <textarea
					value={this.state.comment}
					onChange={(ev) => this.setComment(ev)}
					onKeyDown={(ev) => this.onKeyDownComment(ev)}
				/>
				</div>
				<div>
					<button disabled={!this.isValid()}>send comment</button>
				</div>
			</form>
		)
	}

	sendComment(){
		console.log('sendComment: ', this.state);
		this.setState({
			name: '',
			comment: ''
		});
	}

	isValid(){
		return this.state.name && this.state.comment;
	}

	onSubmit(ev) {
		ev.preventDefault();
		this.isValid() && this.sendComment();
	}
	//для этого onSubmit достаточно
	onKeyDownComment(ev){
		if(ev.keyCode===13 && !ev.shiftKey) {
			ev.preventDefault();
			this.isValid() && this.sendComment()
		}
	}

	setName(ev) {
		this.setState({
			name: ev.target.value
		});
	}

	setComment(ev) {
		this.setState({
			comment: ev.target.value
		});
	}
}
