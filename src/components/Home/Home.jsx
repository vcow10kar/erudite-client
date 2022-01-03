import { useContext } from 'react';
import { LoginContext } from '../Context/LoginContext';
import LoginPage from '../LoginPage/LoginPage';
import styles from './home.module.css';
import AdminDashboard from './AdminDashboard';
import StudentLoginPage from '../StudentLogin/StudentLoginPage';

const Home = () => {
    const { userObject } = useContext(LoginContext);
    return (
        <div className={styles.homePage}>
            {userObject ? null :
                <div className={styles.heroSection}>
                    <div className={styles.heroSectionText}>
                        <h1 className={styles.heroSectionH1}>Welcome to Erudite!</h1>

                        {userObject ? null :
                            <div>
                                <h2 className={styles.heroSectionH2}>Everything you need to manage your school!</h2>
                                <p className={styles.heroSectionP}>Erudite is a modern Student Management System designed to seamlessly run any type of educational institution...</p>
                                <div className= {styles.loginSection}>
                                    <LoginPage />
                                    <StudentLoginPage/>
                                </div>
                            </div>
                        }
                    </div>
                    <div className= {styles.heroSectionImg}>
                        {userObject ? null : <img src="/assets/heroImage.png" alt="heroImg" />}
                    </div>
                </div>
            }

            {userObject ?
                <div>
                    <h1>Welcome to Erudite{userObject ? `, ${userObject.name.firstName}` : null}!</h1>
                    <AdminDashboard />
                </div>
                : null}
        </div>
    )
}

export default Home;