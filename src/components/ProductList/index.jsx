import React from 'react';
import List from '@material-ui/core/List';

import ProductItem from 'components/ProductItem'

import { useStyles } from './style'

export default ({ products }) => {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <List component="nav" aria-label="products-list">
                {products.map((product, key) => 
                    <ProductItem key={key} product={product} /> 
                )}
            </List>
      </div>)
}