import React from 'react'
import PropTypes from 'prop-types'
import {LanguageConsumer, UserConsumer} from './Contexts'
import dictionaries from '../dictionaries'

export function LocalizedText(props) {
	return (
		<LanguageConsumer>
			{language => {
				if (typeof props.children !== 'string') {
					console.warn('string child expected')
					return <span>{props.children}</span>
				}
				return <span>{dictionaries[language][props.children] || props.children}</span>
			}}
		</LanguageConsumer>
	)
}

export function GetUser() {
	return (
        <UserConsumer>
        {user => user}
        </UserConsumer>
    )
}