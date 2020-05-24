import React, { useEffect } from 'react'
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import { useStateValue } from '../../state'

import useStyles from './styles'
import { DbService } from '../../service/dbService'
const service = new DbService('Parameters')
/*
import { v1 as uuid } from 'uuid';
import { Route, Switch } from 'react-router-dom'
import { DbService } from '../../service/dbService'
import logo from '../../assets/img/logo.png'
import Parameter from '../../containers/Parameter'
import Product from '../../containers/Product'
import ProductsList from '../../containers/ProductsList' 
import { unregister } from '../../registerServiceWorker'
const service = new DbService('Parameters')
const Home = () => <div>Home</div>
*/

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const [{ parameters }, dispatch] = useStateValue();
  useEffect(() => {
    async function fetchData () {
      try {
        if(parameters.loading) {
          const data = (await service.getFirst())[0]
          dispatch({
            type: 'updateParameters',
            parameters: { ...data, loading: false }
          })
        }
      } catch (ex) {
        console.error(ex)
      }
    }
    fetchData()
  }, [parameters.loading, dispatch])

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            { parameters.name }
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <h2>Ofertas</h2>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
              <h2>Resumen Pedido</h2>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <h2>Productos</h2>
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}

/*
const App = props => {


    return (
      <Route
        render={({ location }) =>
          <NavigationDrawer
            drawerTitle={<a href='/' onClick={props.performLogoLink} className='logo'><img src={logo} alt='Logo' /></a>}
            toolbarTitle={`${parameters.name} - Pedidos`}
            navItems={navItems.map((props, index) => createMenuItems(props, index))}
            toolbarActions={toolbarActions}
          >
            <Switch key={uuid()}>
              <Route path='/products/:id' location={location} component={Product} />
              <Route path='/products' location={location} component={ProductsList} />
              <Route path='/admin/parameters/:id' location={location} component={Parameter} />
              <Route path='/' location={location} component={Home} />
            </Switch>
          </NavigationDrawer>
        }
      />
    )
  }*/
