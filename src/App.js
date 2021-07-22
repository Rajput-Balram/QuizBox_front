import logo from './logo.svg';
import './App.css';
import HomeComponent from './Components/HomeComponent';
import NavbarComponent from './Components/NavbarComponent';
import FooterComponent from './Components/FooterComponent';
import RoutingComponent from './Components/RoutingComponent';

function App() {
  return (
    <div className="App">
      <RoutingComponent></RoutingComponent>
    </div>
  );
}

export default App;
