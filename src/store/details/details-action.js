export const SET_LOADING = '@@details/SET_LOADING'
export const SET_ERROR = '@@details/SET_ERROR'
export const SET_COUNTRY = '@@details/SET_COUNTRY'
export const CLEAR_DETAILS = '@@details/CLEAR_DETAILS'
export const SET_NEIGHBORDS = '@@details/SET_NEIGHBORDS'


const setLoading = () => ({
    type: SET_LOADING
})

const setError = (err) => ({
    type: SET_ERROR, payload: err
})


export const setCountry = (country) => ({
    type: SET_COUNTRY, payload: country
})

export const setClearDetails = () => ({
    type: CLEAR_DETAILS
})

export const setNeighbords = (countries) => ({
    type: SET_NEIGHBORDS,
    payload: countries
})


export const loadCuntryByName = (name) => (dispatch, _, { client, api }) => {
    dispatch(setLoading())
    client.get(api.searchByCountry(name))
        .then(({ data }) => dispatch(setCountry(data[0])))
        .catch((err) => dispatch(setError(err.message)))
}

export const loadNeighbords = (neighbords) => (dispatch, _, { client, api }) => {
    client.get(api.filterByCode(neighbords))
        .then(({ data }) => dispatch(setNeighbords(data.map(c => c.name))))
        .catch(e => console.log(e))
}