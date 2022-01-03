import SchoolIcon from '@mui/icons-material/School';
import { Button } from '@mui/material';

const StudentLoginPage = () => {
    return (
        <div>
            <Button startIcon={<SchoolIcon/>} variant="contained" disableElevation>Student Login</Button>
        </div>
    )
}

export default StudentLoginPage;