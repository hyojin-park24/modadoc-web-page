import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import SubPage1 from './components/SubPage1';
import SubPage2 from './components/SubPage2';
import UploadPage from './components/UploadPage';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/book/:id" element={<SubPage1 />} />
                    <Route path="/members" element={<SubPage2 />} />
                    <Route path="/upload" element={<UploadPage />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
