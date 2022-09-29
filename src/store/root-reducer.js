import { combineReducers } from 'redux'
import { controlReducer } from './control/controls-reducer'
import { countriesReducer } from './countries/countries-reducer'
import { detailsReducer } from './details/details-reducer'
import { themeReduser } from './theme/theme-reducer'



export const rootreducer = combineReducers({
	theme: themeReduser,
	countries: countriesReducer,
	controls: controlReducer,
	details: detailsReducer

})