//Import necessary styling 
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const TopNavBar = ({ setComponent }) => {

    return (
        <>
            <Navbar bg="light" sticky="top" className="d-flex justify-content-between">
                <Container>
                    {/* Brand redirects users to homepage, which in this case will also set component to landing */}
                    <Navbar.Brand href="/" onClick={() => setComponent("landing")}>
                        Animal Tracker 🔎
                    </Navbar.Brand>

                    {/* The different buttons will determine which component is shown */}
                    <Nav className="mx-auto">
                        <Button onClick={() => setComponent("individuals")}>Individuals Info</Button>
                        <Button onClick={() => setComponent("species")}>Add Species</Button>
                        <Button onClick={() => setComponent("sightings")}>Add Sighting</Button>
                    </Nav>
          
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>Welcome, Super Scientist!</Navbar.Text>
                    </Navbar.Collapse>
                 </Container>
            </Navbar>
        </>
    )
}

export default TopNavBar;