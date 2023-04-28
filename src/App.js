import logo from './logo.svg';
import './App.css';
import LandingPage from './component/Landingpage';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Checkoutsucess from './component/Checkoutsucess';
function App() {

  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/checkoutsucess" element={<Checkoutsucess/>}/>
    </Routes>
  </BrowserRouter>
}

export default App;
