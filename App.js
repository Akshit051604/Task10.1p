import './App.css';
import Subscribe from './Subscribe';
import Footer from './Footer';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route index element={<Subscribe/>} />
        <Route path='/subscribe' element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
