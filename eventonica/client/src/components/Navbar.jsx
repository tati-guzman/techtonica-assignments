import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/BlueTechtonicaWord.png'


const FixedNavBar = () => {

  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="/">
            <img
                  src={Logo}
                  height="30"
                  className="d-lg-inline-block"
                  alt="The word Techtonica written in block letters in two shades of blue"
                />
          </Navbar.Brand>
          
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Welcome, Event Manager!
            </Navbar.Text>
          </Navbar.Collapse>
        
        </Container>
      </Navbar>
    </>
  );
};

export default FixedNavBar;