import React from 'react'

export default function toggleOpenArticle(Component) {
	return class WrapperComponent extends React.Component {
		state = {
			openArticleId: null
		};

		render() {
			return <Component {...this.props} {...this.state} toggleOpenArticle = {(id)=>this.toggleOpenArticle(id)}/>
		}

		toggleOpenArticle(id){
			this.setState({
				openArticleId: id === this.state.openArticleId ? null : id
			})
		}

	}
}