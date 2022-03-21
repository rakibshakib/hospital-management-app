import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ManageAppoinment from './components/Dashboard/ManageAppoinment';
import ManageFeedback from './components/Dashboard/ManageFeedback';
import ManageService from './components/Dashboard/ManageService';
import ServiceDetails from './components/Service/ServiceDetails';
import FirebaseProvider from './context/FirebaseProvider';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Loginpage from './pages/Loginpage';
import RegisterPage from './pages/RegisterPage';
import UserProfile from './pages/UserProfile/UserProfile';
import AdminRoutes from './Routes/AdminRoutes';
import PrivateRoute from './Routes/PrivateRoute';

function App() {
    return (
        <FirebaseProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/login" element={<Loginpage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route
                        path="/myProfile"
                        element={
                            <PrivateRoute>
                                <UserProfile />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/details-service/:id"
                        element={
                            <PrivateRoute>
                                <ServiceDetails />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/dashboard"
                        element={
                            <AdminRoutes>
                                <Dashboard />
                            </AdminRoutes>
                        }
                    >
                        <Route
                            path="manageAppoinments"
                            element={
                                <AdminRoutes>
                                    <ManageAppoinment />
                                </AdminRoutes>
                            }
                        />
                        <Route
                            path="manageServices"
                            element={
                                <AdminRoutes>
                                    <ManageService />
                                </AdminRoutes>
                            }
                        />
                        <Route
                            path="manageFeedback"
                            element={
                                <AdminRoutes>
                                    <ManageFeedback />
                                </AdminRoutes>
                            }
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </FirebaseProvider>
    );
}

export default App;
