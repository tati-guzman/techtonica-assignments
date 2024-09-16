import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FixedNavBar from './components/Navbar.jsx'
import EventList from './components/EventList.jsx'


const App = () => {

  return (
    <div className="App">
      <FixedNavBar />
      <EventList />

    </div>
  )
}

export default App
