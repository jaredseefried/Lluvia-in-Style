import './App.css';
import MainHeader from './containers/MainHeader/MainHeader';
import NavBar from './components/NavBar/NavBar'
import Lluvia from './containers/Lluvia/Lluvia';
import ContactForm from './containers/ContactForm/ContactForm';
import ClothingCarousel from './containers/ClothingCarousel/ClothingCarousel';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Footer from './containers/Footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <MainHeader />
        <Lluvia />
        <Container>
          <Row>
            <Col>
              <ClothingCarousel />
            </Col>
            <Col>
              <h1>I want text here</h1>
            </Col>
          </Row>
          <Row>
            <ContactForm />
          </Row>
          <Footer />
        </Container>
      </header>
    </div>
  );
}

export default App;
