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
      </header>
      <Lluvia />
      <Row className='clothing-carousel-container' id='clothing-line' >
        <Col>
          <h1 className='text-center'>Clothing line</h1>
          <hr style={{ marginBottom: '4%', width: '80%' }} />
        </Col>
      </Row>
      <Row className='clothing-carousel-container'>
        <Col>
          <ClothingCarousel />
        </Col>
        <Col>
          <h2> Welcome to Lluvia In Style Children's Boutique</h2>
          <p style={{ width: '78%' }}>Thank you for visiting our page. Llluvia in Style is a boutique that sells children's clothing ages 12 months - 12 years.  If you are interested in making an order, please fill out the for below and I will be contact. Either leave an email or phone number, which ever is the best way to contact you to place an order.</p>
        </Col>
      </Row>
      <Row>
        <ContactForm id='contact-form' />
      </Row>
      <Footer className='footer-container-main' />
    </div>
  );
}

export default App;
