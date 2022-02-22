import React from 'react'
import './styles.css'
import Stack from './components/Stack'
import Array from './components/Array'
import BST from './components/BST'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Contribute from './components/Contribute'
import Linkedlist from './components/Linkedlist'
import Queue from './components/Queue'

function App() {

  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Fade>
      <Routes>
      <Route path='/' element={<Home/>}> </Route>
      <Route path='Dslist' element={<LandingPage/>}> </Route>
      <Route path='Stack' element={<Stack/>}></Route>
      <Route path='Array' element={<Array/>}></Route>
      <Route path='BST' element={<BST/>}></Route>
     <Route path='Contribute' element={<Contribute/>}></Route>
     <Route path="Linkedlist" element={<Linkedlist/>}></Route>
     <Route path="Queue" element={<Queue/>}></Route>
      </Routes>
      </Fade>
    </div>
    </Router>
  );
}

export default App;
