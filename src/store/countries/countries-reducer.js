import { SET_COUNTRIES, SET_ERROR, SET_LOADING } from './countries-action'


const initialState = {
	status: 'idle', // loading | recevied | rejected
	error: null,
	list: []

}

export const countriesReducer = (state = initialState, { type, payload }) => {

	switch (type) {
		case SET_LOADING:
			return {
				...state,
				status: 'loading',
				error: null
			}
		case SET_COUNTRIES:
			return {
				...state,
				status: 'recevied',
				list: payload
			}
		case SET_ERROR:
			return {
				...state,
				status: 'rejected',
				error: payload
			}
		default:
			return state
	}

}