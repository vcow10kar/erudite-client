import styles from './navbar.module.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { LoginContext } from '../Context/LoginContext';
import PersonIcon from '@mui/icons-material/Person';
import { Button } from '@mui/material';
import LoginPage from '../LoginPage/LoginPage';
import axios from 'axios';

const Navbar = () => {
    const { userObject } = useContext(LoginContext);

    const handleLogout = () => {
        console.log('Handling logout...');
        axios.get('http://localhost:5000/auth/logout', {
            withCredentials: true
        })
        .then(res => {
            if(res.data === 'done') {
                localStorage.removeItem('userObject');
                window.location.href = '/';
            }
            console.log(res);
        }) 
        .catch(err => {
            console.log('Error:', err);
        })
    }

    return (
        <div className={styles.navbarParent}>
            <div className={styles.navbarParentOpac}>
                <div className={styles.navbar}>
                    <Link to='/'>
                        <h1 className={styles.companyName}>Erudite</h1>
                    </Link>
                    {userObject ?
                        <Button onClick={handleLogout} startIcon = {<PersonIcon fontSize= "large"/>} variant = "contained" disableElevation>{userObject.name.firstName} (LOGOUT)</Button>
                        : null}
                </div>


            </div>
        </div >
    )
}

export default Navbar;