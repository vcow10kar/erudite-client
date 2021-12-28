import {Routes, Route} from 'react-router-dom';
import ContestForm from '../ContestForm/ContestForm';
import Home from '../Home/Home';
import StudentForm from '../StudentForm/StudentForm';

const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path = '/' exact element = {<Home/>}/>
                <Route path = '/contestForm' element = {<ContestForm/>}/>
                <Route path = '/studentForm' element = {<StudentForm/>}/>
            </Routes>
        </div>
    )
}

export default AppRoutes;