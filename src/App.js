import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import RecentsPage from './pages/RecentsPage';
import CVPage from './pages/CVPage';

import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: ['Poppins'].join(',')
  },});


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <HashRouter>
          <Routes>
            <Route path = "" element = { <HomePage/> }/>
            <Route path = "about" element = { <AboutPage/> }/>
            <Route path = "recents" element = { <RecentsPage/> }/>
            <Route path = "cv" element = { <CVPage/> }/>
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
