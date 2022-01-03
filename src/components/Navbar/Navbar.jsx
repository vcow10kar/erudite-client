import styles from './navbar.module.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { LoginContext } from '../Context/LoginContext';
import PersonIcon from '@mui/icons-material/Person';
import { Button } from '@mui/material';

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
                        <Button startIcon = {<PersonIcon fontSize= "large"/>} variant = "contained" disableElevation>{userObject.name.firstName} {userObject.name.lastName}</Button>
                        : null}
                </div>


            </div>
        </div >
    )
}

export default Navbar;