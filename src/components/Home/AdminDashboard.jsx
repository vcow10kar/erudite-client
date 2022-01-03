import { style } from '@mui/system';
import { Link } from 'react-router-dom';
import styles from './home.module.css';

const AdminDashboard = () => {
    return (
        <div className={styles.adminDashboard}>
            <h1>Admin Dashboard</h1>
            <div className={styles.homeLinksParent}>
                <h1>View Information</h1>
                <div className={styles.homeLinks}>
                    <div className={styles.homeLinksIndividual}>
                        <Link to='/allContest'>
                            <img src="/assets/contest-search.png" alt="students" />
                            <p>ALL CONTESTS</p>
                        </Link>
                    </div>
                    <div className={styles.homeLinksIndividual}>
                        <Link to='/allStudent'>
                            <img src="/assets/graduate.png" alt="students" />
                            <p> ALL STUDENTS</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.homeLinksParent}>
                <h1>Add Information</h1>
                <div className={styles.homeLinks}>
                    <div className={styles.homeLinksIndividual}>
                        <Link to='/contestForm'>
                            <img src="/assets/online-test.png" alt="students" />
                            <p>ADD NEW CONTEST</p>
                        </Link>
                    </div>
                    <div className={styles.homeLinksIndividual}>
                        <Link to='/studentForm'>
                            <img src="/assets/curriculum-vitae.png" alt="students" />
                            <p>ADD NEW STUDENT</p>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AdminDashboard;