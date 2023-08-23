import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import { Provider } from 'react-redux'
import store from '../store/store'

const RootLayout = () => {
    return (
        <>
            <Provider store={store}>
                <Navbar />
                <Outlet />
            </Provider>
        </>
    )
}

export default RootLayout