import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LocationContainer from './containers/LocationContainer';
import HomePageContainer from './containers/HomePageContainer';
import NavBar from './components/NavBar';

function App() {

  return (

    // <>
    //   <HomePageContainer />
    // </>

    // <div className='App'>
    //   <h1>Hidden Glasgow</h1>
    // </div>

    <Router>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<HomePageContainer />} />
        <Route path='/map' element={<LocationContainer />} />
        <Route path="/quiz" /> // to be added once QuizContainer has been setup.
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </Router>

  );
}

export default App;
