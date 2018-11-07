import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import { changeDate } from '../../AC'

import 'react-day-picker/lib/style.css';

class DateRange extends Component {
    static propTypes = {
        range: PropTypes.object.isRequired
    };

    handleDayClick = (day) => {
        // this.setState(DateUtils.addDayToRange(day, this.state))
        const { changeDate, range } = this.props
        changeDate(DateUtils.addDayToRange(day, range))
    }

    render() {
        console.log('this.props11222', this.props);
        const { from, to } = this.props.range
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    month={new Date(2016, 5)}
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}

export default connect(state => ({
    range: state.filters.dateRange
}), { changeDate })(DateRange)