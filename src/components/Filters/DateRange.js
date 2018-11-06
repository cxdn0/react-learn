import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import { dateFilter } from '../../AC'

import 'react-day-picker/lib/style.css';

class DateRange extends Component {
    static propTypes = {
        selectedDates: PropTypes.object.isRequired
    };

    // state = {
    //     from: null,
    //     to: null
    // }

    handleDayClick = (day) => {
        // this.setState(DateUtils.addDayToRange(day, this.state))
        const { dateFilter, selectedDates } = this.props
        dateFilter(DateUtils.addDayToRange(day, selectedDates))
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('nextProps', nextProps)
        return true
    }

    render() {
        console.log('this.props11222', this.props);
        const { from, to } = this.props.selectedDates
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"

                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}

export default connect(state => ({
    selectedDates: state.selectedDates
}), { dateFilter })(DateRange)