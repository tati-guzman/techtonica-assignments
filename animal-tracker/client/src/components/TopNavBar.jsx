//Import necessary styling 
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// import Logo from '../assets/AnimalTrackerLogo.png'; UPDATE WITH REAL LOGO
import Logo from '../assets/BlueTechtonicaWord.png';

const TopNavBar = ({ setComponent }) => {

    return (
        <>
            <Navbar bg="light" sticky="top">
                <Container>
                {/* Add information for onClick */}
                    <Navbar.Brand href="/"> 
                        {/* ADD REAL LOGO AND UPDATE ALT */}
                        <img
                            src={Logo}
                            height="30"
                            className="d-lg-inline-block"
                            alt="The word Techtonica written in block letters in two shades of blue"
                        />
                    </Navbar.Brand>

                    {/* BUTTON: Individuals Info onClick={() => setComponent("individuals")} */}
                    {/* BUTTON: Add Species onClick={() => setComponent("species")} */}
                    {/* BUTTON: Add Sighting onClick={() => setComponent("sighting")} */}
          
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>Welcome, Super Scientist!</Navbar.Text>
                    </Navbar.Collapse>
                 </Container>
            </Navbar>
        </>
    )
}

export default TopNavBar;