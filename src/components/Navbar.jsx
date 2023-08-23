import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'



const Navbar = () => {

    const cartProducts = useSelector(state => state.cart)

    return (
        <div className='navbar'>
            <div className='navbar-link'>

                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24"><g fill="none" stroke="#cc7000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16.54 7c-.805-2.365-2.536-4-4.54-4c-2.774 0-5.023 2.632-5.023 6.496c0 1.956 1.582 4.727 2.512 6" /><path d="M4.711 11.979C3.055 13.856 2.497 16.164 3.5 17.89c1.387 2.39 5.138 2.831 8.501.9c1.703-.979 2.875-3.362 3.516-4.798" /><path d="M15.014 19.99c2.511 0 4.523-.438 5.487-2.1c1.387-2.39-.215-5.893-3.579-7.824c-1.702-.979-4.357-1.235-5.927-1.07" /><path d="M10.493 9.862c.48.276 1.095.112 1.372-.366a1 1 0 0 0-.367-1.365a1.007 1.007 0 0 0-1.373.366a1 1 0 0 0 .368 1.365zM8.5 15.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0m6-1.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0" /></g></svg>
                <h2><Link className='nav-title'>Redux Toolkit E-commerce</Link></h2>
                <Link to="/" as={Link} className='link' >Products</Link>
            </div>
            <Link to="/cart " as={Link} className='link' >Cart <span className='in-cart'>{cartProducts.length}</span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25c0-.05.01-.09.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2Z" /></svg></Link>

        </div>
    )
}

export default Navbar