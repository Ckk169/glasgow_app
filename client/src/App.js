import './App.css';
import LocationContainer from './containers/LocationContainer';
import HomePageContainer from './containers/HomePageContainer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';

function App() {

  return (


    <div className='App'>
      <h1>Hidden Glasgow</h1>
      <LocationContainer />
    </div>

    // <HomePageContainer />

    // <Router>
    //   <NavBar/> 
    //   <Routes>
    //     <Route exact path='/' element={<HomePageContainer />} />
    //     <Route path='/map' element={<LocationContainer />} />
    //     <Route path="*" element={<h1>Page Not Found</h1>} />


    //   </Routes>

    // </Router>

  );
}

export default App;
