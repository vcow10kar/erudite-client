import { Link } from "react-router-dom";

const StudentDashboardContents = () => {
    return (
        <div>
            <div>
                <Link to='/studentContest'>
                    <img src='/assets/contest-search.png' alt="contest" />
                    <h1>Contests</h1>
                </Link>
            </div>
            <div>
                <img src='/assets/contest-search.png' alt="contest" />
                <h1>Assignments</h1>
            </div>
        </div>
    )
}

export default StudentDashboardContents;