import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Home, Login } from './screens';
import { AuthProvider } from './AuthProvider';

function App() {
  const userInfo = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <AuthProvider 
                element={<Home />}
                userInfo={userInfo}
              />}
          />
          <Route
            path="/login"
            element={
              <AuthProvider 
                element={<Login />}
                userInfo={userInfo}
              />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
