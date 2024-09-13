import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FixedNavBar from './components/Navbar'
import ListStudents from './components/ListStudents'


const App = () => {

  return (
    <div className="App">
      <FixedNavBar />
      <ListStudents />

    </div>
  )
}

export default App
