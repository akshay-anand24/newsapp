import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Hr from './components/Hero/Hr';
import NewsCardsHome from './components/NewsCards/NewsCardsHome';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
    <Route path='/' element={<><Hero/><Hr/><NewsCardsHome/><Hr/></>} />
    </Routes>
    </div>
  );
}

export default App;
