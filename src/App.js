import './App.css';
import { Link } from 'react-router-dom';
import AppRoutes from './components/Routes/AppRoutes';

function App() {
  return (
    <div className='App'>
      <h1>Erudite: Student Management System</h1>
      <div className= 'pageLinks'>
        <div>
          <Link to='/contestForm'>Contest Form</Link>
        </div>
        <div>
          <Link to='/studentForm'>Student Form</Link>
        </div>
        <div>
          <Link to='/'>Home</Link>
        </div>
      </div>

      <AppRoutes />
    </div>
  );
}

export default App;
