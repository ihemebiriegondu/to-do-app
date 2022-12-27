import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './pages/Intro';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'

import { UserAuthContextProvider } from "./context/UserAuthContext";

function App() {
  return (
    <Router>
      <UserAuthContextProvider>
        <Routes>
          <Route path='/' element={<Intro />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        </Routes>
      </UserAuthContextProvider>
    </Router>
  );
}

export default App;
