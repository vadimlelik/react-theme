import { SET_COUNTRY, SET_ERROR, SET_LOADING } from './details-action';



const initialState = {
	status: 'idle', // loading | recevied | rejected
	error: null,
	currentCountry: null
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
		default:
			return state;
	}

}