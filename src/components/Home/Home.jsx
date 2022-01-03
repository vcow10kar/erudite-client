import { useContext } from 'react';
import { LoginContext } from '../Context/LoginContext';
import LoginPage from '../LoginPage/LoginPage';
import styles from './home.module.css';
import HomePageLinks from './HomePageLinks';

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
                <HomePageLinks/>
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