import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './pages/Intro';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Intro />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
    </Router>
  );
}

export default App;
