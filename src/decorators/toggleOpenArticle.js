import React from 'react'

export default function toggleOpenArticle(Component) {
	return class WrapperComponent extends React.Component {
		state = {
	            //суть декораторов в переисползовании кода, не привязывайся к названиям сущностей. Лучше openItemId
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
