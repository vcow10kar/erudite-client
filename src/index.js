import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import customTheme from './utils/theme';
import AuthContext from './components/Context/LoginContext';
import StudentAuthContext from './components/Context/StudentLoginContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <AuthContext>
        <StudentAuthContext>
          <Router>
            <App />
          </Router>
        </StudentAuthContext>
      </AuthContext>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
