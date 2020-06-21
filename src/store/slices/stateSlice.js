import { getDefaultMiddleware, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from 'api'

const initialState = {
  loading: 'idle', showOffers: true, showProducts: false, showCart: false, openDrawer: false
}

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
    reducers: {
      toogleShowCart: (state) => {
        const cart = {...state}
        cart.showCart = !cart.showCart
        if(cart.showCart) {
          cart.showOffers = false
          cart.showProducts = false
        }
        return cart
      },
      toogleShowOffers: (state) => {
        const cart = {...state}
        cart.showOffers = !cart.showOffers
        if(cart.showOffers) {
          cart.showCart = false
          cart.showProducts = false
        }
        return cart
      },
      toogleShowProducts: (state) => {
        const cart = {...state}
        cart.showProducts = !cart.showProducts
        if(cart.showProducts) {
          cart.showCart = false
          cart.showOffers = false
        }
        return cart
      },
      toogleOpenDrawer: (state) => {
        const cart = {...state}
        cart.openDrawer = !cart.openDrawer
        return cart
      },
    },
    extraReducers: {
        [getData.fulfilled]: (state, action) => {
          const data = {...action.payload}
          return ({...data, ...initialState})
        }
    },
    middleware: [...getDefaultMiddleware()],
  })