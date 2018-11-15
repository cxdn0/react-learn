export default store => next => action => {
    if (!action.needsLimitOffset) return next(action)
    next({
        ...action,
        callAPI: `${action.callAPI}limit=5&offset=${(action.payload.page - 1) * 5}`
    })
}