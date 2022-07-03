import './App.css';
import LeafletMapContainer from './containers/LeafletMapContainer';
import LocationContainer from './containers/LocationContainer';
import QuizContainer from './containers/QuizContainer';

function App() {

  return (
    <div className="App">
    <h1> HIDDEN GLASGOW</h1>
    <QuizContainer/>
   <LocationContainer />
    </div>
  )
}

export default App;
