import logo from './logo.svg';
import './App.css';
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from './components/LoginButton';
import Profile from './components/Profile';
import LogoutButton from './components/LogoutButton';
import HomePage from './components/HomePage';

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <h1>Is Loading</h1>
  }

  return (
    <div className="App">
      <HomePage />
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </div>
  );
}

//<header className="App-header">
//<img src={logo} className="App-logo" alt="logo" />
//</header>

export default App;
