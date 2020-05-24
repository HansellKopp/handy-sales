import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
// import './index.scss'
import App from './containers/App/index.js'
import registerServiceWorker from './registerServiceWorker'
import 'typeface-roboto/index.css'
import seed  from './model/seeders'
import { reducer } from './reducer'
import { StateProvider } from './state'
import { initialState } from './reducer/initialState'

seed()

const Main = () => 
    <Router>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider >
    </Router>


ReactDOM.render(<Main />, document.getElementById('root'))
registerServiceWorker()
