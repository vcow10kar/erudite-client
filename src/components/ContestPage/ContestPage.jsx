import { useState, useEffect } from "react";
import axios from 'axios';
import ContestInfo from "./ContestInfo";
import styles from './contestPage.module.css';

const ContestPage = () => {
    const [contests, setContests] = useState(null);

    const getAllContests = () => {
        axios(`${process.env.REACT_APP_BACKEND_URL}/contest`, {
            method: 'get',
            header: {
                'Accept': '*'
            }
        })
        .then(res => {
            console.log(res);
            setContests(res.data.contests);
        })
        .catch(err => {
            console.log('Error', err);
        });
    }

    useEffect(() => {
        console.log('Getting contest data....');
        getAllContests();
    }, []);
    
    return (
        <div>
            <h1>Contest Page</h1>

            {contests !== null ?
                <div className= {styles.contestInfoParent}>
                    {contests.map((el, id) => {
                        return <ContestInfo info={el} key={`ContestInfo-${id}`} />
                    })}
                </div>

                : <h2>No contests scheduled!</h2>
            }
        </div>
    )
}

export default ContestPage;