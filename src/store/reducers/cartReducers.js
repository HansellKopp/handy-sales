export const initialState = {
        products: [],
        selectedGroup: null,
        show: false,
}

export const reducers = {
    
    addProduct: ( state, action ) => {
        state.products.push( {...action.payload} )
        return state
    },
    
    removeProduct: ( state, action ) => {
        const cart = {...state}
        cart.products = state.products.filter(item => item.ID !== action.payload.ID)
        return cart
    },

    selectGroup: ( state, action ) => {
        const cart = {...state}
        cart.selectedGroup = action.payload
        return cart
    },

    clear: (state, action) => (initialState)

}

