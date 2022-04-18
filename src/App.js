import NavBar from './Components/NavBar/Navbar'
import Home from './Screens/Home/Home';
import InfoPage from './Screens/Register/RegisterPage';
import Share from './Screens/Share /Share'

function App() {
  return (
    <div className="App">

    <NavBar />

        <Home />

        <Share />

        <InfoPage />
     </div>

  );
}

export default App;
