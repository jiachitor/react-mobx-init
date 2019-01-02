import React, { Fragment } from 'react'
import { Provider } from 'mobx-react'
import stores from 'stores'

import DevTools from 'mobx-react-devtools'

import Routes from './routes'
import logo from './logo.svg'
import './App.scss'

const App = () => (
    <Fragment>
        <Provider {...stores}>
            <Routes />
        </Provider>
        {
            process.env.NODE_ENV === 'development' ? (
                <DevTools />
            ) : null
        }
    </Fragment>
)

export default App
