export default store => next => action => {
	if(!action.generateId) return next(action)
		console.log('action in middleware', action)
	next({
		...action,
		payload: {
			...action.payload,
			randomId: Date.now() + '' + Math.random()
			}
		})
}