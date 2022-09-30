import { CLEAR_DETAILS, SET_COUNTRY, SET_ERROR, SET_LOADING, SET_NEIGHBORDS } from './details-action';



const initialState = {
	status: 'idle', // loading | recevied | rejected
	error: null,
	currentCountry: null,
	neighbords: []
}


export const detailsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_COUNTRY:
			return {
				...state,
				status: 'recevied',
				currentCountry: payload
			}
		case SET_LOADING:
			return {
				...state,
				status: 'loading',
				error: null
			}
		case SET_ERROR:
			return {
				...state,
				status: 'rejected',
				error: payload
			}
		case SET_NEIGHBORDS:
			return {
				...state,
				neighbords: payload
			}
		case CLEAR_DETAILS:
			return initialState
		default:
			return state;
	}

}