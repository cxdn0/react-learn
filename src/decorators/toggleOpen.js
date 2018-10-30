import React, {Component as ReactComponent} from 'react'

export default (OriginalComponent) => class WrappedComponent extends ReactComponent {
    state = {
        isOpen: false,
        openArticleId: null
    }

    render() {
        //console.log('prop', this.props)
        return <OriginalComponent {...this.props} {...this.state} toggleOpen = {this.toggleOpen} ref = {this.getRef}/>
    }

    toggleOpen = (isArticle = false, openArticleId = null) => ev => {
        ev && ev.preventDefault && ev.preventDefault()
        // console.log('this.state.openArticleId', this.state.openArticleId)
        // console.log('isArticle', isArticle)
        if(isArticle) {
            openArticleId = this.state.openArticleId === openArticleId ? null : openArticleId
            this.setState({ openArticleId })
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