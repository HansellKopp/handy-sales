import { getDefaultMiddleware, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from 'api'

import { reducers, initialState } from 'store/reducers/stateReducers'

export const getData = createAsyncThunk(
    'state/getData',
    async (thunkAPI) => {
      const offers = await api.get('/offers')
      const products = await api.get('/products')
      const parameters = await api.get('/parameters')
      const departaments = await api.get('/departaments')
      const selectedGroup = departaments.data[0].departament
      return {
        offers:offers.data,
        products:products.data,
        parameters:parameters.data[0],
        departaments:departaments.data,
        selectedGroup: selectedGroup
      }
    }
)

export default createSlice({
    name: 'state',
    initialState: { loading: 'loading' },
    reducers,
    extraReducers: {
        [getData.fulfilled]: (state, action) => {
          const data = {...action.payload}
          return ({...data, ...initialState})
        },
        [getData.rejected]: (state, action) => {
          console.log(state, action)
          return state
        }
    },
    middleware: [...getDefaultMiddleware()],
  })