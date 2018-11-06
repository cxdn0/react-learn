import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { connect } from 'react-redux'
import { deleteArticle, selectFilter } from '../../AC'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        selectedArticle: PropTypes.array.isRequired
    };

    handleChange = selected => {
        const {selectFilter} = this.props
        selectFilter(selected)
    }

    render() {
        const { selectFilter, selectedArticle } = this.props
        const { articles } = this.props
        console.log('props', this.props)
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={selectedArticle}
            multi={true}
            onChange={this.handleChange}
        />
    }
}

export default connect(state => ({
    articles: state.articles,
    selectedArticle: state.selectedArticle
}), { selectFilter })(SelectFilter)