import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Login from './components/LoginRegister/Login';
import Register from './components/LoginRegister/Register';
import ServiceDetails from './components/Service/ServiceDetails';
import FirebaseProvider from './context/FirebaseProvider';
import Home from './pages/Home';

function App() {
    return (
        <FirebaseProvider>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route
                        path="/details-service/:id"
                        element={<ServiceDetails />}
                    />
                </Routes>
                <Footer />
            </BrowserRouter>
        </FirebaseProvider>
    );
}

export default App;
