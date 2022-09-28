import { combineReducers } from 'redux'
import { countriesReducer } from './countries/countries-reducer'
import { themeReduser } from './theme/theme-reducer'



export const rootreducer = combineReducers({
	theme: themeReduser,
	countries: countriesReducer
})