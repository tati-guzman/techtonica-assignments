//Import necessary styling 
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const TopNavBar = ({ setComponent }) => {

    return (
        <Navbar className="nav" sticky="top">
            <Container>
                <Navbar.Brand className="brandtext fs-4" href="/" onClick={() => setComponent("landing")}>
                    Animal Tracker 🔎
                </Navbar.Brand>

                {/* The different buttons will determine which component is shown */}
                <Navbar>
                    <Button className="me-2" onClick={() => setComponent("individuals")}>Individuals Info</Button>
                    <Button className="me-2" onClick={() => setComponent("species")}>Add Species</Button>
                    <Button onClick={() => setComponent("sightings")}>Add Sighting</Button>
                </Navbar>
        
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className="text-dark">Welcome, Super Scientist!</Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default TopNavBar;