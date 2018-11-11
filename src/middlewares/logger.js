export default store => next => action => {
    //console.log('---', 'state before: ', store.getState())
    // console.log('---', 'dispatching 0')
    next(action)
    // console.log('---', 'state after 1')
}