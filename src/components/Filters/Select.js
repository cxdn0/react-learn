import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { connect } from 'react-redux'
import { deleteArticle, changeSelect } from '../../AC'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        selected: PropTypes.array.isRequired
    };

    handleChange = selected => {
        const {changeSelect} = this.props
        changeSelect(selected)
    }

    render() {
        const { articles, selected } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={selected}
            multi={true}
            onChange={this.handleChange}
        />
    }
}

export default connect(state => ({
    articles: state.articles,
    selected: state.filters.selected
}), { changeSelect })(SelectFilter)