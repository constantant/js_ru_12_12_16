import React, { Component, PropTypes } from 'react'
import ArticlesSelect from './ArticlesSelect'
import DateRange from './DateRange'
import { connect } from 'react-redux'
import { filterArticle } from '../AC'

class Filters extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    }

    state = {
        ids: null,
        from: null,
        to: null
    };

	componentDidUpdate(props, state){
		const {from, to, ids} = this.state;
		this.props.filterArticle(from, to, ids);
	}

    render() {
        return (
            <div>
                <ArticlesSelect
                    articles={this.props.articles}
                    onChange={(selected)=>this.onChangeArticlesSelect(selected)}
                />
                <DateRange
                    onChange={(from, to)=>this.onChangeDateRange(from, to)}
                />
            </div>
        )
    }

	onChangeArticlesSelect(selected){
        this.setState({
            ids: selected.map(item => item.value)
        });
    }

	onChangeDateRange(from, to){
		this.setState({
			from, to
		});
    }
}

export default connect(
	(state) => {
		return {
			articles: state.articles
		}
	},
    {filterArticle}
)(Filters)