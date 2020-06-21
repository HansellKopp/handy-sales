import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'

import { useSelector, useDispatch } from 'react-redux'
import { useStyles } from './style'

export default () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = React.useState(null)  
  const options = useSelector(state => state.state.tokens)
  const selectedGroup = useSelector(state => state.cart.selectedGroup)

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuItemClick = (event, option) => {
    setAnchorEl(null)
    dispatch({ type: 'cart/selectGroup', payload: option })
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="product-group">
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="lock-menu"
          aria-label="Filtrar por "
          onClick={handleClickListItem}
        >
          <ListItemText primary="Grupo" secondary={selectedGroup || options[0]} />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={option === selectedGroup}
            onClick={(event) => handleMenuItemClick(event, option)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}
