import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Offers from 'components/Offers'
import Products from 'components/Products'

import { useStyles } from './style'
import ShoppingCart from 'components/ShoppingCart';

export default function SimpleExpansionPanel() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const {
    showCart,
    showOffers,
    showProducts
  } = useSelector(state => state.state)
  const toogleShowCart  = () => dispatch({ type: 'state/toogleShowCart' })
  const toogleShowOffers  = () => dispatch({ type: 'state/toogleShowOffers' })
  const toogleShowProducts  = () => dispatch({ type: 'state/toogleShowProducts' })

  return (
    <div className={classes.root}>
      <ExpansionPanel expanded={showOffers} onChange={toogleShowOffers}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="offers-content"
          id="offers-header"
        >
          <Typography className={classes.heading}>Ofertas</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
           <Offers />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={showProducts} onChange={toogleShowProducts}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="products-content"
          id="products-header"
        >
          <Typography className={classes.heading}>Productos</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <Products />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={showCart} onChange={toogleShowCart}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="order-content"
          id="order-header"
        >
          <Typography className={classes.heading}>Pedido</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <ShoppingCart />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
