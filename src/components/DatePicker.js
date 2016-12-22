import React, {Component, PropTypes} from 'react'
import DayPicker, {DateUtils, LocaleUtils} from 'react-day-picker'
import 'react-day-picker/lib/style.css'

export default class DatePicker extends Component {
	static propTypes = {};

	state = {
		from: null,
		to: null
	};

	render() {
		const {from, to} = this.state;
		return (
			<div>
				<DayPicker
					initialMonth={new Date()}
					numberOfMonths={3}
					selectedDays={day => DateUtils.isDayInRange(day, {from, to})}
					onDayClick={(e, day) => this.handleDayClick(day)}
				/>
				{this.showSelectedRange()}
			</div>
		)
	}

	handleDayClick(day) {
		const range = DateUtils.addDayToRange(day, this.state);
		this.setState(range);
	}

	showSelectedRange() {
		const {from, to} = this.state;

		let _from = from && LocaleUtils.formatDay(from),
			_to = to && LocaleUtils.formatDay(to);

		return (
			<div>
				<div>from: {_from}</div>
				<div>to: {_to}</div>
			</div>
		)
	}
}