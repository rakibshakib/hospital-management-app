import './App.css';
import FirebaseProvider from './context/FirebaseProvider';

function App() {
    return (
        <FirebaseProvider>
            <div className="App">
                <h2>This is porject home page</h2>
            </div>
        </FirebaseProvider>
    );
}

export default App;
