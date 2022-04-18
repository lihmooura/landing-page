import NavBar from './Components/NavBar/Navbar'
import Home from './Screens/Home/Home';
import InfoPage from './Screens/Register/RegisterPage';
import Share from './Screens/Share /Share'
import SharedPage from './Screens/SharedPayments/SharedPayments';

function App() {
  return (
    <div className="App">

    <NavBar />

        <Home />

        <Share />

        <InfoPage />

        <SharedPage />
     </div>

  );
}

export default App;
