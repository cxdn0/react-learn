import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Articles from './routes/Articles'
import NewArticle from './routes/NewArticle'
import NotFound from './routes/NotFound'
import CommentsPage from './routes/CommentsPage'
import UserForm from './UserForm'
import Filters from './Filters'
import Counter from './Counter'
import 'react-select/dist/react-select.css'
import {Switch, Route, Redirect, NavLink} from 'react-router-dom'
import {ConnectedRouter} from 'react-router-redux'
import {LanguageProvider, UserProvider} from './Contexts'
// import dictionaries from '../dictionaries'
import history from '../history'

// const {LanguageProvider} = Context

class App extends Component {
    static propTypes = {

    }

    // static childContextTypes = {
    //     user: PropTypes.string
    // }

    // getChildContext() {
    //     return {
    //         user: this.state.username
    //     }
    // }

    state = {
        username: '',
        language: 'ru'
    }

    changeLanguage = language => ev => this.setState({ language })

    render() {
        // console.log('--- context', LanguageProvider)
        return (
            <ConnectedRouter history = {history}>
                <LanguageProvider value = {this.state.language}>
                    <UserProvider value = {this.state.username}>
                        <div>
                            <ul>
                                <li onClick = {this.changeLanguage('en')}>English</li>
                                <li onClick = {this.changeLanguage('ru')}>Russian</li>
                            </ul>
                            <div>
                                <h2>Main menu</h2>
                                <div><NavLink activeStyle={{color: 'red'}} to="/counter">Counter</NavLink></div>
                                <div><NavLink activeStyle={{color: 'red'}} to="/filters">Filters</NavLink></div>
                                <div><NavLink activeStyle={{color: 'red'}} to="/articles">Articles</NavLink></div>
                            </div>
                            <UserForm value={this.state.username} onChange={this.handleUserChange}/>
                            <Switch>
                                <Route path="/counter" component={Counter}/>
                                <Route path="/filters" component={Filters}/>
                                <Route path="/articles/new" component={NewArticle}/>
                                <Route path="/articles" component={Articles}/>
                                <Route path='/comments' component={CommentsPage}/>
                                {/*<Redirect from = '/comments/' to = '/comments/1'/>*/}
                                <Route path="*" component={NotFound}/>
                            </Switch>
                        </div>
                    </UserProvider>
                </LanguageProvider>
            </ConnectedRouter>
        )
    }

    handleUserChange = (username) => this.setState({ username })
}

export default App