import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Speakers from './Components/speakers/Speakers';

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Speakers></Speakers>
    </div>
  );
}

export default App;
