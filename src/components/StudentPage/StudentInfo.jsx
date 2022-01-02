import styles from './studentPage.module.css';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const StudentInfo = ({ info, handleDelete }) => {
    return (
        <div className={styles.studentInfo}>
            <p className={styles.studentTags}><span>Batch No.:</span><span>{info.batchNo}</span></p>
            <div className={styles.studentDetails}>
                <p><span className={styles.infoTitle}>Name:</span> {info.name.firstName} {info.name.lastName}</p>
                <p><span className={styles.infoTitle}>Age:</span> {info.age}</p>
                <p><span className={styles.infoTitle}>Email Id:</span> {info.emailId}</p>
                <p><span className={styles.infoTitle}>Contact No.:</span> {info.contactNo}</p>
                <p><span className={styles.infoTitle}>Education:</span> {info.education}</p>
                <p><span className={styles.infoTitle}>City:</span> {info.city}</p>
            </div>
            <div className={styles.studentButtons}>
                <IconButton aria-label="delete" size="large" onClick = {() => handleDelete(info._id)}>
                    <DeleteIcon fontSize="inherit" sx = {{color: 'red'}}/>
                </IconButton>

                <IconButton aria-label="delete" size="large">
                    <EditIcon fontSize="inherit" sx = {{color: '#3F7EA6'}}/>
                </IconButton>
            </div>
        </div>
    )
}

export default StudentInfo;