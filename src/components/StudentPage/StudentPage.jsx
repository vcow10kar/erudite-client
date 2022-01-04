import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import StudentInfo from "./StudentInfo";
import styles from './studentPage.module.css';

const StudentPage = () => {

    const [students, setStudents] = useState(null);

    const handleChange = (e) => {
        e.preventDefault();
        switch(e.target.value) {
            case 'age': {
                let temp = [...students].sort((a, b) => a.age - b.age);
                setStudents(temp);
                break;
            }

            case 'name': {
                let temp = [...students].sort((a, b) => {
                    if(a.name.lastName < b.name.lastName) {
                        return -1;
                    } else if(a.name.lastName > b.name.lastName) {
                        return 1;
                    }

                    return 0;
                });
                setStudents(prev => [...temp]);
                break;
            }

            default: {
                return;
            }
        }
    }

    const getAllStudents = () => {

        axios(`${process.env.REACT_APP_BACKEND_URL}/student`, {
            method: 'get',
            headers: {
                'Accept': '*'
            }
        })
            .then(res => {
                //console.log(res.data.students)
                setStudents([...res.data.students]);
            })
            .catch(err => {
                console.log('Error:', err);
            })
    }

    const handleDelete = (id) => {
        axios(`${process.env.REACT_APP_BACKEND_URL}/student/${id}`, {
            method: 'delete',
            headers: {
                'Accept': '*'
            }
        })
            .then(res => {
                console.log(res);
                getAllStudents();
            })
            .catch(err => {
                console.log('Error:', err);
            })
    }

    useEffect(() => {
        getAllStudents();
    }, []);
    return (
        <div>
            <div className= {styles.studentPageHeader}>
                <h1>Student Page</h1>
                <div>
                    <select onChange = {handleChange}>
                        <option value = "">Sort by</option>
                        <option value = "age">Sort by Student Age</option>
                        <option value = "name">Sort by Student Name</option>
                    </select>
                </div>
            </div>

            {students !== null ?

                <div className={styles.studentInfoParent}>
                    {students.map((el, id) => {
                        return <StudentInfo info={el} key={`StudentInfo-${id}`} handleDelete={handleDelete} />
                    })}
                </div>
                :
                <p>No student information available!</p>
            }
        </div>
    )
}

export default StudentPage;