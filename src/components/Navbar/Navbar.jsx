import styles from './navbar.module.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { LoginContext } from '../Context/LoginContext';

const Navbar = () => {
    const { userObject } = useContext(LoginContext);

    return (
        <div className={styles.navbarParent}>
            <div className={styles.navbarParentOpac}>
                <div className={styles.navbar}>
                    <Link to='/'>
                        <h1 className={styles.companyName}>Erudite</h1>
                    </Link>

                    {userObject ?
                        <div className={styles.pageLinks}>
                            <div>
                                <Link to='/contestForm'>Contest Form</Link>
                            </div>
                            <div>
                                <Link to='/studentForm'>Student Form</Link>
                            </div>
                        </div>
                        : null}
                </div>
            </div>
        </div >
    )
}

export default Navbar;