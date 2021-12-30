import styles from './navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className= {styles.navbar}>
            <h1 className= {styles.companyName}>Erudite</h1>
            <div className= {styles.pageLinks}>
                <div>
                    <Link to='/contestForm'>Contest Form</Link>
                </div>
                <div>
                    <Link to='/studentForm'>Student Form</Link>
                </div>
                <div>
                    <Link to='/'>Home</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;