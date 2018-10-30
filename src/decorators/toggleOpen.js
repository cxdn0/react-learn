import React, {Component as ReactComponent} from 'react'

export default (OriginalComponent) => class WrappedComponent extends ReactComponent {
    state = {
        isOpen: null
    }

    render() {
        console.log('prop', this.props)
        return <OriginalComponent {...this.props} {...this.state} toggleOpen = {this.toggleOpen} ref = {this.getRef}/>
    }

    toggleOpen = openArticleId => ev => {
        ev && ev.preventDefault && ev.preventDefault()
        // console.log('this.props in toggleOpen', this.state)
        // console.log('isArticle', isArticle)
        if(this.props.articles) {
            openArticleId = this.state.isOpen === openArticleId ? null : openArticleId
            this.setState({ isOpen: openArticleId })
            return
        }
        
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    getRef = (ref) => {
        //console.log('---', ref)
    }
}