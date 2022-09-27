import { SET_THEME } from './theme-actions';

export const themeReduser = (state = 'light', { type, payload }) => {
	console.log(type);
	switch (type) {

		case SET_THEME: {
			return payload
		}
		default:
			return state
	}
}