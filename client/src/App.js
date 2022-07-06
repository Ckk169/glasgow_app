import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import LocationContainer from './containers/LocationContainer';
import QuizContainer from './containers/QuizContainer';
import HomePageContainer from './containers/HomePageContainer';
import NavBar from './components/NavBar';
import { useState, useEffect } from 'react';
import LocationService from './services/LocationService';
import QuizService from './services/QuizService';
import Header from './components/Header';
// import '.src/css/Header.css'


function App() {

  const [locations, setLocations] = useState([]);
  const [questions, setQuestions] = useState([]);



  useEffect(() => {
    LocationService.getLocations()
  .then(locations => setLocations(locations))
  }, [])
  
  useEffect(() => {
     QuizService.getQuestions()
    .then(data => setQuestions(data))
  }, [])







  return (

    <>
      <Header />
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<HomePageContainer />} />
          <Route path='/map' element={<LocationContainer locations={locations} />} />
          <Route path='/quiz' element={<QuizContainer questions={questions} />} />
          <Route path='*' element={<h1>Page Not Found</h1>} />
        </Routes>
      </Router>
    </>
  );

}

export default App;
