import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const StudentForm = () => {
    return (
        <div>
            <h1>Student Form</h1>

            <form>
                <Stack spacing={2} width={350}>

                    <TextField name='firstName' label='First Name' variant='outlined' required />
                    <TextField name='lastName' label='Last Name' variant='outlined' required />

                    <TextField label='Email Id' variant='outlined' required />

                    <TextField label='Password' variant='outlined' required />

                    <TextField label='City' variant='outlined' required />

                    <TextField label='Contact No.' variant='outlined' required />

                    <TextField label='Age' variant='outlined' required />

                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Gender"
                        displayEmpty
                        required
                    >
                        <MenuItem value="">
                            <em>Gender</em>
                        </MenuItem>
                        <MenuItem value={'Male'}>Male</MenuItem>
                        <MenuItem value={'Female'}>Female</MenuItem>
                        <MenuItem value={'Other'}>Other</MenuItem>
                    </Select>



                    <TextField label='Education' variant='outlined' required />
                    <TextField label='Batch No.' variant='outlined' required />

                    <Button variant="contained" type="submit" disableElevation>Create Student Account</Button>
                </Stack>
            </form>
        </div >
    )
}

export default StudentForm;