import { useState } from 'react';
import SchoolIcon from '@mui/icons-material/School';
import { Button, TextField } from '@mui/material';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import styles from './studentLogin.module.css';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 300,
    bgcolor: 'background.paper',
    border: '2px solid #0C2E59',
    boxShadow: 24,
    p: 4,
};


const StudentLoginPage = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [displayError, setDisplayError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleFormSubmit = async (e) => {
        localStorage.removeItem('studentInfo');
        e.preventDefault();

        const data = new FormData(e.target);

        const payload = {
            emailId: data.get('emailId'),
            password: data.get('password')
        }

        console.log('Payload', payload);

        let response = await fetch('http://localhost:5000/auth/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        let res = await response.json();

        if (res.message) {
            setDisplayError(true);
            setErrorMessage(res.message);
        } else {
            setDisplayError(false);
            setErrorMessage(null);
            let studentInfo = {
                name: {
                    firstName: res.student.name.firstName,
                    lastName: res.student.name.lastName,
                },
                batchNo: res.student.batchNo,
                token: res.token
            }
            localStorage.setItem('studentInfo', JSON.stringify(studentInfo));
            window.location.href = '/';
        }
    }
    return (
        <div>
            <Button onClick={handleOpen} startIcon={<SchoolIcon />} variant="contained" disableElevation>Student Login</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} >
                    <div className={styles.loginPage}>
                        <h2>STUDENT LOGIN</h2>

                        <form onSubmit={handleFormSubmit}>
                            <div>
                                <TextField name='emailId' required variant="outlined" placeholder='Enter Email Id' label="Email Id" />
                            </div>

                            <div>
                                <TextField name='password' required type='password' variant="outlined" placeholder='Enter Password' label="Password" />
                            </div>

                            {displayError ?
                                <div>
                                    <p>{errorMessage}</p>
                                </div>
                                : null}

                            <div className={styles.loginButton}>
                                <Button startIcon={<SchoolIcon />} type="submit" variant="contained" disableElevation>Student Login</Button>
                            </div>
                        </form>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default StudentLoginPage;