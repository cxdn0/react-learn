import {CHANGE_SELECT, CHANGE_DATE_RANGE} from '../constants'

const defaultFilters = {
    selected: [],
	dateRange: {
		from: null,
		to: null
	}
}

export default (filters = defaultFilters, action) => {
    const {type, payload} = action
    console.log('payload', payload)
    console.log('filters', filters)

    switch (type) {
        case CHANGE_DATE_RANGE: return {...filters, dateRange: payload.dateRange}

        case CHANGE_SELECT: return {...filters, selected: payload.selected}
    }

    return filters
}