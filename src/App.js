import logo from './logo.svg';
import './App.css';
import './styles/navbar.css';
import Homepage from './components/homepage/homepage';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage />
    </div>
  );
}

export default App;
