import { getDefaultMiddleware, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from 'api'

import { reducers, initialState } from 'store/reducers/stateReducers'

export const getData = createAsyncThunk(
    'state/getData',
    async (thunkAPI) => {
      const response = await api.get('/alldata')
      return response.data
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
        }
    },
    middleware: [...getDefaultMiddleware()],
  })