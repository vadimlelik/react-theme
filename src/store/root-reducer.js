import { combineReducers } from 'redux'
import { themeReduser } from './theme/theme-reducer'



export const rootreducer = combineReducers({
	theme: themeReduser
})