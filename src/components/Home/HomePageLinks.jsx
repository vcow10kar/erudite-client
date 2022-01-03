import { Link } from 'react-router-dom';
import styles from './home.module.css';

const HomePageLinks = () => {
    return (
        <div className={styles.homeLinks}>
            <div className={styles.homeLinksIndividual}>
                <Link to='/allContest'>
                    <img src="/assets/contest-search.png" alt="students" />
                    <p>All Contests</p>
                </Link>
            </div>
            <div className={styles.homeLinksIndividual}>
                <Link to='/allStudent'>
                    <img src="/assets/graduate.png" alt="students" />
                    <p> All Students</p>
                </Link>
            </div>
            <div className={styles.homeLinksIndividual}>
                <Link to='/contestForm'>
                    <img src="/assets/online-test.png" alt="students" />
                    <p>Add New Contest</p>
                </Link>
            </div>
            <div className={styles.homeLinksIndividual}>
                <Link to='/studentForm'>
                    <img src="/assets/curriculum-vitae.png" alt="students" />
                    <p>Add New Student</p>
                </Link>
            </div>
        </div>
    )
}

export default HomePageLinks;