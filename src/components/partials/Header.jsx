import { Link } from 'react-router-dom'

function Header () {
    return (
        <nav>
            <Link to="/">Go to Home Page</Link>{' | '}
            <Link to="/services">See Our Services</Link>{' | '}
            <Link to="/contact">Contact Us</Link>
        </nav>
    )
}

export default Header