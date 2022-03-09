import './App.css';
import {BrowserRouter as Router, Routes, Route}  from 'react-router-dom'
import Login from "./components/Login";
import MainHeader from "./components/MainHeader";
import Hola from "./components/Hola";
import Crud from "./components/Crud";

function App() {
    return (
        <Router>
            <MainHeader />
            <Routes>
                <Route path='/login' element={<Login/>} />
                <Route path='/hola' element={<Hola/>} />
                <Route path='/crud' element={<Crud/>} />
            </Routes>
        </Router>
    );
}

export default App;
