// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Home'; 
import Header from './pages/Header';
import Footer from './pages/Footer';
import EmployeeList from './components/EmployeeList'; 
import AddEmployee from './components/AddEmployee'; 
import EditEmployee from './components/EditEmployee'; 

function App() {
    return (
        <>
            <Header />
            
            <Routes>
                <Route path='/' element={<Home />} /> {/* Main route redirects to Home */}
                <Route path='/home' element={<Home />} />
                <Route path='/add-employee' element={<AddEmployee />} /> 
                <Route path='/employees' element={<EmployeeList />} /> 
                
                <Route path='/edit/:id' element={<EditEmployee />} /> 
            </Routes>
            <Footer />
        </>
    );
}

export default App;
