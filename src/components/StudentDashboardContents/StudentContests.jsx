import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { StudentLoginContext } from "../Context/StudentLoginContext"

const StudentContests = () => {
    const { studentObject } = useContext(StudentLoginContext);
    const [contests, setContests] = useState(null);


    useEffect(() => {
        console.log('Batch No', studentObject.batchNo);
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/contest/${studentObject.batchNo}`)
            .then(res => {
                setContests(res.data.contests);
            })
            .catch(err => {
                console.log('Error:', err);
            })
    }, []);
    return (
        <div>
            Contests for {studentObject.batchNo}

            {contests ?
                <div>
                    {contests.map(el => {
                        return (
                            <div>
                                <p>Title: {el.title}</p>
                                <p>Type: {el.type}</p>
                                <p>Marks: {el.marks}</p>
                            </div>
                        )

                    })
                    }
                </div>
                : null}
        </div>
    )
}

export default StudentContests;