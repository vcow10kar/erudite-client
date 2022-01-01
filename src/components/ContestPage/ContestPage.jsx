import { useState, useEffect } from "react";
import axios from 'axios';
import ContestInfo from "./ContestInfo";

const ContestPage = () => {
    const [contests, setContests] = useState(null);

    const getAllContests = () => {
        axios(`http://localhost:5000/contest`, {
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
            Contest Page

            {contests !== null ?
                <div>
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