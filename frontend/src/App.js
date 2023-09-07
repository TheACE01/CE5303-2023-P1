import logo from './assets/logo.svg';
import './App.css';
import { useAuth0 } from "@auth0/auth0-react";
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';

function App() {
  const { isAuthenticated, isLoading } = useAuth0();
  
  if (isLoading) {
    return (
      <div className="App">
        <h3>Loading...</h3>
        <img src={logo} className="App-logo" alt="logo"
          style={{
            width: '150px',
            height: '150px',
          }} />
      </div>
    );
  }

  return (
    <div className="App">
      {isAuthenticated ? <HomePage /> : <LoginPage />}
    </div>
  );
}

export default App;
