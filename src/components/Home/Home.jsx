import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LoginContext } from '../Context/LoginContext';
import LoginPage from '../LoginPage/LoginPage';
import styles from './home.module.css';

const Home = () => {
    const { userObject } = useContext(LoginContext);
    return (
        <div className={styles.homePage}>
            <div>
                <h1>Welcome to Erudite{userObject ? `, ${userObject.name.firstName}` : null}!</h1>

                <h2>Everything you need to manage your educational institution</h2>

                <p>Erudite is a modern Student Management System designed to seamlessly run any type of education institution</p>
            </div>
            {userObject ?
                <div className={styles.homeLinks}>
                    <Link to='/allContest'>All Contests</Link>
                    <Link to='/allStudent'>All Students</Link>
                </div>
                : null}
            {userObject ? null :
                <div>
                    <LoginPage />
                </div>
            }
        </div>
    )
}

export default Home;