
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import "./App.css";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Header />}></Route>
            <Route path="/bruno" element={<Button />}></Route>
            <Route path="/botao" element={<Footer />}></Route>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
