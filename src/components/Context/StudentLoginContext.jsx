import { useEffect, useState } from "react";
import { createContext } from "react";

export const StudentLoginContext = createContext({});

export default function StudentAuthContext({ children }) {
    const [studentObject, setStudentObject] = useState(null);

    useEffect(() => {
        let student = JSON.parse(localStorage.getItem('studentInfo'));
        if (student) {
            setStudentObject(student);
        }
    }, []);

    return (
        <StudentLoginContext.Provider value={{ studentObject }}>{children}</StudentLoginContext.Provider>
    )
}

