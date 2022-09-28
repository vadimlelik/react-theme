import { SET_SEARCH } from './controls-action';


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
		default:
			return state;
	}
}