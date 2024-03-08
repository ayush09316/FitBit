import React from 'react';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ExerciseDetail from './pages/ExerciseDetail';
import { Route,Routes } from 'react-router-dom';
import { Box } from '@mui/material';


function App() {
  return (
    <Box width={"400px"} m='auto' sx={{width:{xl:'1448px'}}}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/exercise/:id' element={<ExerciseDetail />} />
      </Routes>
      <Footer/>
    </Box>
  );
}

export default App;
