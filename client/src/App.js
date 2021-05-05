import './App.css';
import MainHeader from './containers/MainHeader/MainHeader';
import NavBar from './components/NavBar/NavBar'
import Lluvia from './containers/Lluvia/Lluvia';
import ClothingCarousel from './containers/ClothingCarousel/ClothingCarousel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <MainHeader />
        <Lluvia />
        <ClothingCarousel />
      </header>
    </div>
  );
}

export default App;
