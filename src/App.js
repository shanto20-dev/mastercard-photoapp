import './App.css';
import { Route, Switch } from "react-router-dom";
import Homepage from './components/homepage/homepage';
import Navbar from './components/navbar/navbar';
import Gallery from './components/gallery/gallery';

function App() {
  return (
    <div className="App">
        <Navbar/>
      <Switch>
        <Route exact path="/albums/:id" component={Gallery} />
        <Route exact path='/' component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
