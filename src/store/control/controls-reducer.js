import { SET_REGION, SET_RESET, SET_SEARCH } from './controls-action';


const initialState = {
	search: '',
	region: ''

}


export const controlReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_SEARCH:
			return {
				...state,
				search: payload
			}
		case SET_REGION:
			return {
				...state,
				region: payload
			}
		case SET_RESET:
			return initialState

		default:
			return state;
	}
}