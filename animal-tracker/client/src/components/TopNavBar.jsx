//Import necessary styling 
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const TopNavBar = ({ setComponent }) => {

    return (
        <Navbar bg="light" sticky="top" className="d-flex justify-content-between">
            <Container>
                <Navbar.Brand className="brandtext" href="/" onClick={() => setComponent("landing")}>
                    Animal Tracker 🔎
                </Navbar.Brand>

                {/* The different buttons will determine which component is shown */}
                <Navbar className="mx-auto">
                    <Button onClick={() => setComponent("individuals")}>Individuals Info</Button>
                    <Button onClick={() => setComponent("species")}>Add Species</Button>
                    <Button onClick={() => setComponent("sightings")}>Add Sighting</Button>
                </Navbar>
        
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>Welcome, Super Scientist!</Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default TopNavBar;