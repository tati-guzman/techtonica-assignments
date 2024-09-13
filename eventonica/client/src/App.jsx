import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FixedNavBar from './components/Navbar'
import EventList from './components/EventList'


const App = () => {

  return (
    <div className="App">
      <FixedNavBar />
      <EventList />

    </div>
  )
}

export default App
