import React from 'react'

const LanguageChange = React.createContext()
const UsernameChange = React.createContext()

export const LanguageProvider = LanguageChange.Provider
export const LanguageConsumer = LanguageChange.Consumer
export const UserProvider = UsernameChange.Provider
export const UserConsumer = UsernameChange.Consumer