import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Login from './components/LoginRegister/Login';
import FirebaseProvider from './context/FirebaseProvider';

function App() {
    return (
        <FirebaseProvider>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Login />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </FirebaseProvider>
    );
}

export default App;
