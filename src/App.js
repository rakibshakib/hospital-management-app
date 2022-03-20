import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/LoginRegister/Login';
import FirebaseProvider from './context/FirebaseProvider';

function App() {
    return (
        <FirebaseProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </FirebaseProvider>
    );
}

export default App;
