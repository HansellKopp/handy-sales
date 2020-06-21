import React from 'react'
import { useSelector } from 'react-redux'
import List from '@material-ui/core/List';
import ShoppingCartItem from 'components/ShoppingCartItem'

import { useStyles } from './style'

export default () => {
    const classes = useStyles();
    const products = useSelector(state => state.cart.products)

    return (
        <div className={classes.root}>
            <List component="nav" aria-label="products-list">
                {products.map((product, key) => 
                    <ShoppingCartItem key={key} product={product} /> 
                )}
            </List>
      </div>)
}