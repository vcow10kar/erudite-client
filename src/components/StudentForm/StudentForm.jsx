import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import styles from './studentForm.module.css';
import axios from 'axios';

const StudentForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        let data = new FormData(e.target);

        const payload = {
            city: data.get('city'),
            age: data.get('age'),
            education: data.get('education'),
            gender: data.get('gender'),
            contactNo: data.get('contactNo'),
            emailId: data.get('emailId'),
            password: data.get('password'),
            batchNo: data.get('batchNo'),
            name: {

                firstName: data.get('firstName'),
                lastName: data.get('lastName')
            }
        }

        axios(`http://localhost:5000/student`, {
            method: 'post',
            data: payload,
            header: {
                'Accept': '*'
            }
        })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log('Error', err);
            });
    }
    return (
        <div className={styles.studentForm}>

            <form onSubmit={handleSubmit}>
                <Stack spacing={2} width={350} sx={{ margin: 'auto' }} className = {styles.studentFormForm}>

                    <h1>Student Form</h1>

                    <TextField name='firstName' label='First Name' variant='outlined' required />
                    <TextField name='lastName' label='Last Name' variant='outlined' required />

                    <TextField name="emailId" label='Email Id' variant='outlined' required />

                    <TextField name="password" label='Password' variant='outlined' required />

                    <TextField name="city" label='City' variant='outlined' required />

                    <TextField name="contactNo" label='Contact No.' variant='outlined' required />

                    <TextField name="age" label='Age' variant='outlined' required />

                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Gender"
                        displayEmpty
                        required
                        name="gender"
                    >
                        <MenuItem value="">
                            <em>Gender</em>
                        </MenuItem>
                        <MenuItem value={'Male'}>Male</MenuItem>
                        <MenuItem value={'Female'}>Female</MenuItem>
                        <MenuItem value={'Other'}>Other</MenuItem>
                    </Select>



                    <TextField name="education" label='Education' variant='outlined' required />
                    <TextField name="batchNo" label='Batch No.' variant='outlined' required />

                    <Button variant="contained" type="submit" disableElevation>Create Student Account</Button>
                </Stack>
            </form>
        </div >
    )
}

export default StudentForm;